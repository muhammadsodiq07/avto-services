import "./Header.scss";
import i18n from "../../lang/i18n.jsx";
import { Link, useLocation } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import MenuRespons from "./MenuRespons/MenuRespons";

// SAMANDAR
export default function Header() {
  const location = useLocation();
  const [lang, setLang] = useState(
    localStorage.getItem("language") !== null
      ? localStorage.getItem("language")
      : "rus"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [act, setAct] = useState();
  const { t } = useTranslation();
  const nav = [
    {
      id: 1,
      name: t("home"),
      pathName: "/home",
      active: true,
    },
    {
      id: 2,
      name: t("about"),
      pathName: "/about",
      active: false,
    },
    {
      id: 3,
      name: t("services"),
      pathName: "/services",
      active: false,
    },
    {
      id: 4,
      name: t("shop"),
      pathName: "/shop",
      active: false,
    },
    {
      id: 5,
      name: t("blog"),
      pathName: "/blog",
      active: false,
    },
    {
      id: 6,
      name: t("contacts"),
      pathName: "/contacts",
      active: false,
    },
  ];

  // CHANGED LANGUAGE = = = = = = = = = = = = = = = = = = = = = =
  const changedLanguage = (e) => {
    localStorage.setItem("language", e.target.value);
    i18n.changeLanguage(localStorage.getItem("language"));
  };

  // USEEFFECT = = = = = = = = = = = = = = = = = = = = = =
  useEffect(() => {
    if (localStorage.getItem("language") !== null) {
      setLang(localStorage.getItem("language"));
    } else {
      localStorage.setItem("language", "rus");
    }
  }, []);

  useEffect(() => {
    nav.map((item, inx) => {
      if (location.pathname !== "/") {
        if (
          "/" + location.pathname.split("/").at(-1) === item.pathName &&
          "/" + location.pathname.split("/").at(-2) === item.pathName
        ) {
          setAct("/" + location.pathname.split("/").at(-1));
        }
        if ("/" + location.pathname.split("/").at(-1) === item.pathName) {
          setAct("/" + location.pathname.split("/").at(-1));
        }
        if ("/" + location.pathname.split("/").at(-2) === item.pathName) {
          setAct("/" + location.pathname.split("/").at(-2));
        }
      } else {
        setAct("/" + location.pathname.split("/").at(-1));
      }
    });
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <nav className="header__nav">
              <ul className="header__list">
                {nav.map((item, inx) => (
                  <li
                    className={`header__item ${
                      item.pathName === act ? "navItemAct" : ""
                    }`}
                    key={inx + 1}
                  >
                    <Link to={item.pathName}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__select-btn">
              <button className="header__request-a-call">
                {t("request-a-call")}
                <span></span>
                <span></span>
              </button>

              <div className="header__lang">
                <span>
                  <FaGlobe />
                </span>

                <select onChange={changedLanguage}>
                  {lang === "uz" ? (
                    <>
                      <option value="uz">UZ</option>
                      <option value="rus">RU</option>
                    </>
                  ) : lang === "rus" ? (
                    <>
                      <option value="rus">RU</option>
                      <option value="uz">UZ</option>
                    </>
                  ) : (
                    ""
                  )}
                </select>
              </div>

              <button
                className="header__menu-btn"
                onClick={() => setMenuOpen(true)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MenuRespons
        nav={nav}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        changedLanguage={changedLanguage}
      />
    </>
  );
}
