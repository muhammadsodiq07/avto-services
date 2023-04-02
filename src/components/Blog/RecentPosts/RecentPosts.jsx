import React from "react";
import "./RecentPosts.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { emplloyActions } from "../../../store/Splice";

export default function RecentPosts() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const arr = [
    {
      id: 12,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: false,
      day: 29,
      year: 2022,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "Alignment",
        },
        {
          tagsId: 2,
          name: "Electronic",
        },
      ],
      categor: "Sport Cars",
    },
    {
      id: 13,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 29,
      year: 2022,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "Alignment",
        },
        {
          tagsId: 2,
          name: "Electronic",
        },
      ],
      categor: "Tuning",
    },
    {
      id: 14,
      title: "Signs Your Car Battery Has To Be Replaced",
      images: [
        "https://picsum.photos/id/142/425/255",
        "https://picsum.photos/id/141/425/255",
        "https://picsum.photos/id/143/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: false,
      day: 29,
      year: 2022,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "Alignment",
        },
        {
          tagsId: 2,
          name: "Electronic",
        },
      ],
      categor: "Store",
    },
  ];

  const recentPostHandler = (value) => {
    dispatch(
      emplloyActions.recentPostHandler({
        categor: value,
      })
    );
  };

  return (
    <>
      <section className="recentposts">
        <h4 className="recentposts__title">{t("recent-posts")}</h4>

        <ul className="recentposts__list">
          {arr !== undefined
            ? arr.map((item, inx) => (
                <li
                  className="recentposts__item"
                  key={inx + 1}
                  onClick={() => (
                    recentPostHandler(item.categor), window.scrollTo(0, 0)
                  )}
                >
                  <div className="recentposts__item-img">
                    <img src={item.images[0]} alt="" />
                  </div>

                  <div className="recentposts__item-desc">
                    <h5>{item.title}</h5>
                    <p>
                      {item.month}, {item.day} {item.year}
                      <span></span>
                      {item.comments_count === 0
                        ? "No comments"
                        : item.comments_count}
                    </p>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </section>
    </>
  );
}
