import "./Popular.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import PopularItems from "./PopularItems/PopularItems";
import pimg1 from "../../../assets/images/home-popular-1.png";
import pimg2 from "../../../assets/images/home-popular-2.png";

// SAMANDAR
export default function Popular() {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-popular">
        <div className="container">
          <div className="home-popular__inner">
            <h3 className="home-popular__title">{t("popular-articles")}</h3>

            <div className="home-popular__main">
              <div
                className="home-popular__main-big-content"
                data-aos={"fade-up"}
              >
                <div className="home-popular__main-big-content-img">
                  <img src={pimg1} alt="" />
                </div>

                <div className="home-popular__main-big-content-desc">
                  <span>{t("car-advice")}</span>
                  <p>Signs Your Car Battery Has To Be Replaced</p>
                </div>
              </div>

              <PopularItems pathnameSingl={"/home/blog"}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
