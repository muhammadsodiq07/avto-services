import "./Book.scss";
import React from "react";
import { useTranslation } from "react-i18next";

//  Muhammadsodiq
export default function Book() {
  const { t } = useTranslation();
  return (
    <section className="book">
      <div className="container">
        <div className="book__inner">
          <h4 className="book__title">{t("book-title")}</h4>

          <p className="book__text">
            Egestas integer eget aliquet nibh praesent tristique magna.
            Penatibus et magnis dis parturient montes nascetur ridiculus
          </p>
          <button className="book__btn">book service now</button>
        </div>
      </div>
    </section>
  );
}
