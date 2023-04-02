import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import pimg1 from "../../../../assets/images/home-popular-1.png";
import pimg2 from "../../../../assets/images/home-popular-2.png";

export default function PopularItems({ pathnameSingl }) {
  const { t } = useTranslation();
  const arr = [
    {
      id: 1,
      categor: t("car-advice"),
      name: "Signs Your Car Battery Has To Be Replaced",
      data: "May, 29 2022",
      comments: "No Comments",
      img: pimg2,
    },
    {
      id: 2,
      categor: t("car-advice"),
      name: "Signs Your Car Battery Has To Be Replaced",
      data: "May, 29 2022",
      comments: "No Comments",
      img: pimg1,
    },
    {
      id: 3,
      categor: t("car-advice"),
      name: "Signs Your Car Battery Has To Be Replaced",
      data: "May, 29 2022",
      comments: "No Comments",
      img: pimg2,
    },
  ];
  return (
    <>
      <div className="home-popular__main-small-content">
        <ul className="home-popular__main-small-content-list">
          {arr !== undefined
            ? arr.map((item, inx) => (
                <li
                  className="home-popular__main-small-content-item"
                  data-aos={"fade-up"}
                  key={inx + 1}
                >
                  <div className="home-popular__main-small-content-item-img">
                    <span>{item.categor}</span>
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="home-popular__main-small-content-item-desc" data-aos={"fade-up"}>
                    <h4>{item.name}</h4>
                    <p>
                      {item.data}
                      <span></span>
                      {item.comments}
                    </p>

                    <Link
                      to={pathnameSingl + "/blog-singl-post"}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <button>
                        <span>
                          <BiChevronRight />
                        </span>
                        {t("read-more")}
                      </button>
                    </Link>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
}
