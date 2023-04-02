import React from "react";
import "./Categories.scss";
import { useTranslation } from "react-i18next";

export default function Categories({ functionHnadler, list, title }) {
  const { t } = useTranslation();

  return (
    <>
      <section className="categories">
        <h4 className="categories__title">{title}</h4>

        <ul className="categories__list">
          <li className="categories__item">
            <span></span>
            <p onClick={() => functionHnadler("All")}>All</p>
          </li>
          {list != undefined
            ? list.map((item, inx) => (
                <li className="categories__item" key={inx + 1}>
                  <span></span>
                  <p
                    onClick={() => (
                      functionHnadler(item.categor), window.scrollTo(0, 0)
                    )}
                  >
                    {item.categor}
                  </p>
                </li>
              ))
            : ""}
        </ul>
      </section>
    </>
  );
}
