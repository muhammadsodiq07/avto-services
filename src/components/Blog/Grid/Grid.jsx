import "./Grid.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Categories from "../Categories/Categories";
import Pagnition from "../../Pagnition/Pagnition";
import React, { useEffect, useState } from "react";
import RecentPosts from "../RecentPosts/RecentPosts";
import PopularTags from "../PopularTags/PopularTags";
import { useDispatch, useSelector } from "react-redux";
import { emplloyActions } from "../../../store/Splice";
import ReceComments from "../ReceComments/ReceComments";
import CalendarArchive from "../CalendarArchive/CalendarArchive";

export default function Grid({ pathnameSingl }) {
  const obj = useSelector((state) => state.employ);
  const [pagitemCount, setPagitemCount] = useState(8);
  const [pagCount, setPagCount] = useState(1);
  const [data, setDate] = useState(obj);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const categorList = [
    {
      id: 1,
      categor: "Store",
    },
    {
      id: 1,
      categor: "Repair",
    },
    {
      id: 1,
      categor: "Tuning",
    },
    {
      id: 1,
      categor: "Sport Cars",
    },
    {
      id: 1,
      categor: "Technology",
    },
  ];
  const archivesList = [
    {
      id: 1,
      categor: "May",
    },
    {
      id: 1,
      categor: "April",
    },
    {
      id: 1,
      categor: "March",
    },
  ];

  const pagNextHandler = () => {
    let a = [];
    let count = 1;
    let startCount =
      pagCount === 1 ? 1 : pagitemCount * pagCount - pagitemCount + 1;
    obj.map((item, inx) => {
      if (inx + 1 >= startCount && count <= pagitemCount) {
        count += 1;
        a.push({ ...item, num: inx + 1 });
      }
    });
    setDate(a);
  };

  const categorHandlerDispach = (value) => {
    dispatch(
      emplloyActions.categorHandler({
        categor: value,
      })
    );
  };

  const monthHandler = (value) => {
    dispatch(
      emplloyActions.monthHandler({
        month: value,
      })
    );
  };

  useEffect(() => {
    setDate(obj);
    pagNextHandler();
  }, [obj]);

  return (
    <>
      <section className="blog-grid">
        <div className="container">
          <div className="blog-grid__inner">
            <div className="blog-grid__left">
              <ul className="blog-grid__left-list">
                {data.length !== 0 ? (
                  data.map((item, inx) => (
                    <li
                      className="blog-grid__main-small-content-item blog-grid__left-item"
                      data-aos={"fade-up"}
                      key={inx + 1}
                    >
                      <Link to={pathnameSingl + "/blog-singl-post"}>
                        <div className="blog-grid__left-item-box">
                          <div className="blog-grid__main-small-content-item-img">
                            <span>{item.categor}</span>
                            <img src={item.images[0]} alt={item.name} />
                          </div>

                          <div className="blog-grid__main-small-content-item-desc">
                            <h4>{item.title}</h4>
                            <p>
                              {item.month}, {item.day} {item.year}
                              <span></span>
                              {item.comments_count === 0
                                ? "No comments"
                                : item.comments_count}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="blog-grid__no-information">
                    <p>{t("no-information")}</p>
                  </li>
                )}
              </ul>

              <Pagnition
                pagCount={pagCount}
                setPagCount={setPagCount}
                pagitemCount={pagitemCount}
                pagNextHandler={pagNextHandler}
              />
            </div>

            <div className="blog-grid__right">
              <Categories
                functionHnadler={categorHandlerDispach}
                title={t("categories")}
                list={categorList}
              />
              <RecentPosts />

              {/* <ReceComments /> */}

              <PopularTags />
              <Categories
                functionHnadler={monthHandler}
                title={t("archives")}
                list={archivesList}
              />
              <CalendarArchive />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
