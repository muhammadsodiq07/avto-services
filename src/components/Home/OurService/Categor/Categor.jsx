import "./Categor.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../../../assets/images/home-popular-1.png";
import { Link } from "react-router-dom";

// SAMANDAR
export default function Categor({ pathnameSingl }) {
  const { t } = useTranslation();
  return (
    <>
      <section className="home-ser-categor">
        <div className="home-ser-categor__inner">
          <ul className="home-ser-categor__list">
            <li className="home-ser-categor__item">
              <div
                className="home-ser-categor__item-img"
              >
                <img src={img} alt="" />
              </div>

              <div className="home-ser-categor__item-desc">
                <h4 data-aos={"fade-up"}>
                  {t("rubbing-waxing-and-polishing")}
                </h4>
                <p data-aos={"fade-up"}>
                  Gravida quis blandit turpis cursus in hac habitasse platea.
                  Velit sed ullamcorper morbi tincidunt ornare massa eget. Odio
                  morbi quis commodo odio aenean. Ut etiam sit amet nisl purus
                </p>

                <Link
                  className="home-ser-categor__item-btn"
                  to={pathnameSingl + "/singl-services"}
                >
                  <button>
                    {t("get-service")}
                    <span></span>
                    <span></span>
                  </button>
                </Link>
              </div>
            </li>
            <li className="home-ser-categor__item">
              <div
                className="home-ser-categor__item-img"
              >
                <img src={img} alt="" />
              </div>

              <div className="home-ser-categor__item-desc">
                <h4 data-aos={"fade-up"}>{t("car-exterior-cleaning")}</h4>
                <ul
                  className="home-ser-categor__item-list"
                  data-aos={"fade-up"}
                >
                  <li className="home-ser-categor__item-item">
                    <p>
                      <span></span> {t("same-day-service")}
                    </p>
                  </li>
                  <li className="home-ser-categor__item-item">
                    <p>
                      <span></span> {t("same-day-service")}
                    </p>
                  </li>
                  <li className="home-ser-categor__item-item">
                    <p>
                      <span></span> {t("same-day-service")}
                    </p>
                  </li>
                  <li className="home-ser-categor__item-item">
                    <p>
                      <span></span> {t("same-day-service")}
                    </p>
                  </li>
                </ul>

                <Link
                  className="home-ser-categor__item-btn"
                  to={pathnameSingl + "/singl-services"}
                >
                  <button data-aos={"fade-up"}>
                    {t("more")}
                    <span></span>
                    <span></span>
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
