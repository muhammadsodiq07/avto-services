import React from "react";
import "./PopularTags.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emplloyActions } from "../../../store/Splice";

export default function PopularTags() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const arr = [
    {
      categor: "alignment",
    },
    {
      categor: "rotation",
    },
    {
      categor: "repair",
    },
    {
      categor: "speed",
    },
    {
      categor: "servicing",
    },
    {
      categor: "tehnology",
    },
    {
      categor: "electronic",
    },
    {
      categor: "tire",
    },
    {
      categor: "cleaning",
    },
  ];

  const tagsHandler = (value) => {
    dispatch(
      emplloyActions.tagsHandler({
        tag: value,
      })
    );
  };

  return (
    <>
      <section className="populartags">
        <h4 className="populartags__title">{t("popular-tags")}</h4>

        <ul className="populartags__list">
          {arr !== undefined
            ? arr.map((item, inx) => (
                <li
                  className="populartags__item"
                  key={inx + 1}
                  onClick={() => (
                    tagsHandler(item.categor), window.scrollTo(0, 0)
                  )}
                >
                  <Link>{item.categor}</Link>
                </li>
              ))
            : ""}
        </ul>
      </section>
    </>
  );
}
