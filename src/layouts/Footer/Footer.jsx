import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const menusNav = [
    {
      id: 1,
      name: t("about"),
      nav: [
        {
          pathName: "/about",
          name: t("about"),
        },
        {
          pathName: "/about",
          name: t("our-team"),
        },
        {
          pathName: "/about",
          name: t("our-work"),
        },
        {
          pathName: "/about",
          name: t("faq"),
        },
      ],
    },
    {
      id: 2,
      name: t("popular-services"),
      nav: [
        {
          pathName: "/services",
          name: t("tire-repair"),
        },
        {
          pathName: "/services",
          name: t("brake-repair"),
        },
        {
          pathName: "/services",
          name: t("engine-repair"),
        },
        {
          pathName: "/services",
          name: t("charging-repair"),
        },
      ],
    },
    {
      id: 3,
      name: "",
      nav: [
        {
          pathName: "/services",
          name: t("cooling-system"),
        },
        {
          pathName: "/services",
          name: t("wheel-alignment"),
        },
        {
          pathName: "/services",
          name: t("battery-starting"),
        },
        {
          pathName: "/services",
          name: t("suspension-repair"),
        },
      ],
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__logo-menus">
              <div className="footer__logo-desc">
                <div className="footer__logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>

                <p className="footer__desc">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat
                </p>

                <div className="footer__support">
                  <span>Support center 24/7</span>
                  <p>+ 1 123 456-7890</p>
                </div>
              </div>

              <div className="footer__menus">
                {menusNav.map((item, inx) => (
                  <div className="footer__menus-items" key={inx + 1}>
                    <h4>{item.name}</h4>

                    <ul className="footer__menus-list">
                      {item.nav.map((nav, ninx) => (
                        <li className="footer__menus-item" key={ninx + 1}>
                          <span></span>
                          <Link
                            to={nav.pathName}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {nav.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer__subscribe">
              <h4>{t("subscribe")}</h4>

              <form className="footer__form">
                <label>{t("your-email")}</label>
                <input
                  type="email"
                  placeholder={t("enter-your-email-address")}
                />
                <button type="submit">
                  {t("subscribe")}
                  <span></span>
                  <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer__info">
          <p>{t("copyrights-2022")}</p>
        </div>
      </footer>
    </>
  );
}
