import "./Hero.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import img from "../../assets/images/home-popular-1.png";

// SAMANDAR
export default function Hero({ title }) {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__desc">
              <ul className="hero__pathnames-list">
                {location.pathname.split("/").map((item, inx) =>
                  inx + 1 > 1 ? (
                    <li className="hero__pathnames-item"  data-aos="zoom-in">
                      <p>{t(item)}</p>
                      <span></span>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>

              {title === undefined ? (
                <h2 className="hero__title" data-aos="fade-up">
                  {t(location.pathname.split("/").at(-1))}
                </h2>
              ) : (
                <h2 className="hero__title" data-aos="fade-up">
                  {title}
                </h2>
              )}
            </div>
          </div>
        </div>

        <div className="hero__img">
          <img src={img} alt="hero content" />
          <span></span>
        </div>
      </section>
    </>
  );
}
