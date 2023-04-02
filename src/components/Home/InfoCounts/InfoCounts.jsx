import React from "react";
import "./InfoCounts.scss";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

// SAMANDAR
export default function InfoCounts() {
  const { t } = useTranslation();
  const info = [
    {
      id: 1,
      count: 8,
      simvol: "K+",
      desc: t("info-1"),
    },
    {
      id: 2,
      count: 22,
      simvol: "+",
      desc: t("info-2"),
    },
    {
      id: 3,
      count: 500,
      simvol: "+",
      desc: t("info-3"),
    },
    {
      id: 4,
      count: 99,
      simvol: "%",
      desc: t("info-4"),
    },
  ];

  return (
    <>
      <section className="info-counts">
        <div className="container">
          <div className="info-counts__inner">
            <ul className="info-counts__list">
              {info !== undefined
                ? info.map((item, inx) => (
                    <li className="info-counts__item" key={inx + 1}>
                      <CountUp start={0} end={item.count} duration={3} />
                      <span>
                        {/* {item.count} */}
                        {item.simvol}
                      </span>

                      <p>{item.desc}</p>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
