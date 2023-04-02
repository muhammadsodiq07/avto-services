import "./Request.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import footerSubTitle from "../../../assets/images/contact.png";

// SAMANDAR
export default function Request() {
  const { t } = useTranslation();
  return (
    <>
      <section className="home-request">
        <div className="container">
          <div className="home-request__inner">
            <h3 className="home-request__title" data-aos="fade-up">
              {t("request-an-appointment-online")}
              <span>
                <img src={footerSubTitle} alt="request sub title" />
              </span>
            </h3>

            <p className="home-request__text" data-aos="fade-up">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>

            <form className="home-request__form" data-aos="fade-up">
              <div className="home-request__form-inputs" data-aos="fade-up">
                <div className="home-request__input-box">
                  <label htmlFor={t("your-name")}>{t("your-name")}</label>
                  <input type="text" placeholder={t("your-name")} />
                </div>

                <div className="home-request__input-box">
                  <label htmlFor={t("your-phone")}>{t("your-phone")}</label>
                  <input type="number" placeholder={t("your-phone")} />
                </div>
              </div>

              <div className="home-request__input-box" data-aos="fade-up">
                <label htmlFor={t("your-message")}>{t("your-message")}</label>
                <textarea
                  rows="1"
                  cols="30"
                  placeholder={t("your-message")}
                ></textarea>
              </div>

              <button
                className="home-request__form-btn"
                data-aos="fade-up"
                type="submit"
              >
                {t("send")}
                <span></span>
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
