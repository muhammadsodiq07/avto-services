import "./Spend.scss";
import React from "react";

export default function Spend() {
  return (
    <section className="spend">
      <div className="container">
        <div className="spend__inner">
          <div className="spend__left">
            <p className="spend__title">
              SPEND $150+ AND GET $20 BONUS CT MONEY
            </p>
            <span className="spend__text">
              {" "}
              Tristique senectus et netus et malesuada. Sagittis nisl rhoncus
              mattis rhoncus urna neque viverra. Fermentum dui faucibus in
              ornare quam viverra. Netus et malesuada fames ac turpis.
            </span>
            <button className="spend__btn">
              go to shop
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="spend__right">
            <img
              src="https://www.auto-data.net/images/f51/Mercedes-Benz-E-class-Coupe-C238-facelift-2020.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
