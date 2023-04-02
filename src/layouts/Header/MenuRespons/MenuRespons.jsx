import "./MenuRespons.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

// SAMANDAR
export default function MenuRespons(props) {
  const [menuNavAct, setMenuNavAct] = useState(1);
  const { t } = useTranslation();
  return (
    <>
      <section className={`head-menu ${props.menuOpen ? "menuOpen" : ""}`}>
        <div
          className={`head-menu__backdrop ${props.menuOpen ? "menuOpen" : ""}`}
          onClick={() => props.setMenuOpen(false)}
        ></div>

        <div className={`head-menu__inner ${props.menuOpen ? "menuOpen" : ""}`}>
          <div className="head-menu__btn">
            <button onClick={() => props.setMenuOpen(false)}>
              <IoClose />
            </button>
          </div>

          <nav className="head-menu__nav">
            <ul className="head-manu__list">
              {props.nav.map((item, inx) => (
                <li
                  className={`head-menu__item header__item ${
                    item.id === menuNavAct ? "navItemAct" : ""
                  }`}
                  onClick={() => (
                    setMenuNavAct(item.id), props.setMenuOpen(false)
                  )}
                  key={inx + 1}
                >
                  <Link to={item.pathName}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <button className="header__request-a-call head-menu__request-a-call">
              {t("request-a-call")}
              <span></span>
              <span></span>
            </button>

            <div className="header__lang head-menu__lang">
              <span>
                <FaGlobe />
              </span>

              <select onChange={props.changedLanguage}>
                {props.lang === "uz" ? (
                  <>
                    <option value="uz">UZ</option>
                    <option value="rus">RU</option>
                  </>
                ) : props.lang === "rus" ? (
                  <>
                    <option value="rus">RU</option>
                    <option value="uz">UZ</option>
                  </>
                ) : (
                  ""
                )}
              </select>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
