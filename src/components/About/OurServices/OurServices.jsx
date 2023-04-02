import React from "react";
import "./Ourservices.scss";
import { useTranslation } from "react-i18next";
import services1 from "../../../assets/icons/ourSerives1.svg";
import services2 from "../../../assets/icons/ourSerives2.svg";
import services3 from "../../../assets/icons/ourSerives3.svg";
import services4 from "../../../assets/icons/ourSerives4.svg";
import services5 from "../../../assets/icons/ourSerives5.svg";
import services6 from "../../../assets/icons/ourSerives6.svg";
import services7 from "../../../assets/icons/ourSerives7.svg";
import services8 from "../../../assets/icons/ourSerives8.svg";
import services9 from "../../../assets/icons/ourSerives9.svg";
import { Link } from "react-router-dom";

// Muhammadsodiq
export default function OurServices({ pageNameSingl }) {
  const { t } = useTranslation();
  const ourServicesArr = [
    {
      id: 1,
      name: t("ourServices1"),
      img: services1,
    },
    {
      id: 2,
      name: t("ourServices2"),
      img: services2,
    },
    {
      id: 3,
      name: t("ourServices3"),
      img: services3,
    },
    {
      id: 4,
      name: t("ourServices4"),
      img: services4,
    },
    {
      id: 5,
      name: t("ourServices5"),
      img: services5,
    },
    {
      id: 6,
      name: t("ourServices6"),
      img: services6,
    },
    {
      id: 7,
      name: t("ourServices7"),
      img: services7,
    },
    {
      id: 8,
      name: t("ourServices8"),
      img: services8,
    },
    {
      id: 9,
      name: t("ourServices9"),
      img: services9,
    },
  ];

  return (
    <section className="ourServices">
      <div className="container">
        <div className="ourServices__inner">
          <h3 className="ourServices__title">{t("ourServices-title")}</h3>

          <ul className="ourServices__list">
            {ourServicesArr !== undefined
              ? ourServicesArr.map((item, index) => (
                  <li
                    className="ourServices__item"
                    data-aos-delay={`${index + 1}00`}
                    data-aos={"fade-up"}
                    key={index}
                  >
                    <Link to={pageNameSingl + "/singl-services"}>
                      <div className="ourServices__item-box">
                        <div className="ourServices__item-img-box">
                          <img src={item.img} alt="" />
                        </div>

                        <p className="ourServices__name">{item.name}</p>
                      </div>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </section>
  );
}
