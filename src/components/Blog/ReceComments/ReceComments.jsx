import React from "react";
import "./ReceComments.scss";
import { useTranslation } from "react-i18next";

export default function ReceComments() {
  const { t } = useTranslation();
  const arr = [
    {
      id: 1,
      title: "Irene Flores felis eget velit aliquet sagittis id consectetur ",
    },
    {
      id: 1,
      title:
        "Ferne Jacobson diam maecenas sed enim ut sem viverra aliquet eget consequat semper viverra ",
    },
    {
      id: 1,
      title:
        "Justice O'Connell turpis in eu mi bibendum neque egestas congue quisque enenatis tellus ",
    },
  ];

  return (
    <>
      <section className="rececomments">
        <h4 className="rececomments__title">{t("rece-nt-comments")}</h4>

        <ul className="rececomments__list">
          {arr !== undefined
            ? arr.map((item, inx) => (
                <li className="rececomments__item" key={inx + 1}>
                  <span></span>
                  <p>{item.title}</p>
                </li>
              ))
            : ""}
        </ul>
      </section>
    </>
  );
}
