import "./Hero.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImg from "../../../assets/images/home-hero.png";
import subTitleName from "../../../assets/images/home-hero-sub-title.png";

// SAMANDAR
export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <section className="home-hero">
        <span className="home-hero__autoservce-name">
          <img src={subTitleName} alt="hero sub title" />
        </span>

        <div className="container">
          <div className="home-hero__inner">
            <div className="home-hero__desc">
              <h2 className="home-hero__title">
                {t("car-service")} <br /> {t("authority")}
              </h2>

              <p className="home-hero__text">
                Привет Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt
              </p>

              <Link to={"/home/about"}>
                <button className="home-hero__btn">
                  {t("more")}
                  <span></span>
                  <span></span>
                </button>
              </Link>
            </div>

            <div className="home-hero__img">
              <img src={heroImg} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
