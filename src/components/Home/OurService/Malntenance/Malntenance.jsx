import React from "react";
import "./Malntenance.scss";
import { useTranslation } from "react-i18next";

// SAMANDAR
export default function Malntenance() {
  const { t } = useTranslation();
  return (
    <>
      <section className="home-maln">
        <div className="container">
          <div className="home-maln__inner">
            <h3 className="home-maln__title">{t("maintenance-&-repairs")}</h3>

            <div
              className="home-maln__media"
              data-aos-duration="1000"
              data-aos={"zoom-in"}
            >
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                allow="accelerometer; 
                  autoplay; clipboard-write;
                  encrypted-media; gyroscope;
                  picture-in-picture; web-share"
                title="Car Service #LikeABosch"
                src="https://www.youtube.com/embed/VTDB3mKx7jM"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
