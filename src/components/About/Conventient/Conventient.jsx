import React from "react";
import "./Conventient.scss";
import { useTranslation } from "react-i18next";

// Muhammadsodiq
export default function Conventient() {
  const { t } = useTranslation();
  return (
    <section className="convenient">
      <div className="container">
        <div className="convenient__inner">
          <div className="convenient__left" data-aos="fade-right">
            <h3 className="convenient__title">{t("about-conventient")}</h3>
            <p className="convenient__text">
              Amet commodo nulla facilisi nullam vehicula. Purus in mollis nunc
              sed. Accumsan tortor posuere ac ut consequat semper viverra nam.
              Augue lacus viverra vitae congue eu consequat ac felis donec
            </p>

            <div className="convenient__sub-text-one">
              <div className="convenient__sub-title-box">
                <p>{t("highly-experts")}</p>
                <span>99%</span>
              </div>

              <div className="convenient__animation-one">
                <span></span>
              </div>
            </div>

            <div className="convenient__sub-text-two">
              <div className="convenient__sub-title-box">
                <p>{t("highly-experts")}</p>
                <span>99%</span>
              </div>

              <div className="convenient__animation-one">
                <span></span>
              </div>
            </div>
          </div>

          <div className="convenient__right" data-aos="fade-left">
            <img
              src="https://files.sbcdnsb.com/images/G-fSAmDAflRspM5kyaEm1g/businesses/1630498082/KMMlogo-withbackground0.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
