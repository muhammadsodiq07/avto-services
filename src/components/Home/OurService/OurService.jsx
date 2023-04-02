import React from "react";
import "./OurService.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import serviceIcon1 from "../../../assets/icons/ourSerives1.svg";
import serviceIcon2 from "../../../assets/icons/ourSerives2.svg";
import serviceIcon3 from "../../../assets/icons/ourSerives3.svg";
import serviceIcon4 from "../../../assets/icons/ourSerives4.svg";
import serviceIcon5 from "../../../assets/icons/ourSerives5.svg";
import serviceIcon6 from "../../../assets/icons/ourSerives10.svg";

// SAMANDAR
export default function OurService({ pathnameSingl, pathname, serCount }) {
  const { t } = useTranslation();
  const arr = [
    {
      id: 1,
      pathName: "/",
      icon: serviceIcon1,
      name: t("brake-repair"),
      desc: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisl vel",
    },
    {
      id: 2,
      pathName: "/",
      icon: serviceIcon2,
      name: t("engine-repair"),
      desc: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisl vel",
    },
    {
      id: 3,
      pathName: "/",
      icon: serviceIcon3,
      name: t("tire-repair"),
      desc: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisl vel",
    },
    {
      id: 4,
      pathName: "/",
      icon: serviceIcon4,
      name: t("cooling-system "),
      desc: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisl vel",
    },
    {
      id: 5,
      pathName: "/",
      icon: serviceIcon5,
      name: t("battery-repair"),
      desc: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisl vel",
    },
    {
      id: 6,
      pathName: "/",
      icon: serviceIcon6,
      name: t("steering-repair"),
      desc: "Eget velit aliquet sagittis id consectetur. Elit ut aliquam purus sit amet luctus. Odio eu feugiat pretium nibh ipsum consequat nisl vel",
    },
  ];
  return (
    <>
      <section className="home-service">
        <div className="container">
          <div className="home-service__inner">
            <div className="home-service__top">
              <h3>{t("our-services")}</h3>

              <Link to={pathname + "/services"}>
                <button>
                  {t("all-service")}
                  <span></span>
                  <span></span>
                </button>
              </Link>
            </div>

            <div className="home-service__main">
              <ul className="home-service__main-list">
                {arr !== undefined
                  ? arr.map((item, inx) =>
                      serCount >= inx + 1 ? (
                        <li
                          className="home-service__main-item"
                          data-aos-delay={`${inx + 2}00`}
                          data-aos={"fade-up"}
                          key={inx + 1}
                        >
                          <span>
                            <img src={item.icon} alt={item.name} />
                          </span>

                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                          <Link to={pathnameSingl + "/singl-services"}>
                            <button>
                              <span>
                                <BiChevronRight />
                              </span>
                              {t("detalies-service")}
                            </button>
                          </Link>
                        </li>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </ul>
              <button className="home-service__main-all-service-btn">
                {t("all-service")}
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
