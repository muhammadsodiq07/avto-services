import "./YourCar.scss";
import React from "react";
import { useTranslation } from "react-i18next";

// Muhammadsodiq
export default function YourCar() {
  const { t } = useTranslation();
  const yourCarArr = [
    {
      id: 1,
      num: "01",
      text: t("yourSer1"),
    },
    {
      id: 2,
      num: "02",
      text: t("yourSer2"),
    },
    {
      id: 3,
      num: "03",
      text: t("yourSer3"),
    },
    {
      id: 4,
      num: "04",
      text: t("yourSer4"),
    },
  ];

  return (
    <section className="yourCar">
      <div className="container">
        <div className="yourCar__inner">
          <div className="yourCar__box">
            <div className="yourCar__left">
              <h3 className="yourCar__title">{t("yourTitle")}</h3>

              <p className="yourCar__text">
                Egestas integer eget aliquet nibh praesent tristique magna.
                Penatibus magnis dis parturient montes
              </p>
            </div>

            <div className="yourCar__right">
              <ul className="yourCar__list">
                {yourCarArr !== undefined
                  ? yourCarArr.map((item, index) => (
                      <li
                        className="yourCar__item"
                        data-aos-delay={`${index + 1}00`}
                        data-aos={"fade-up"}
                        key={index}
                      >
                        <div className="yourCar__item-box">
                          <div className="yourCar__item-inner-box">
                            <span>{item.num}</span>
                            <p>{item.text}</p>
                          </div>

                          <p className="yourCar__item-text">
                            Tempor id eu nisl nunc mi ipsum faucibus. Ac feugiat
                            sed lectus vestibulum. Pellentesue habitant morbi
                            tristique senectus
                          </p>
                        </div>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
