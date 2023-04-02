import "./ShopGrid.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function ShopGrid({ data, pathnameSingl }) {
  return (
    <>
      <section className="shop-grid">
        <div className="container">
          <div className="shop-grid__inner">
            <ul className="shop-grid__list">
              {data !== undefined
                ? data.map((item, inx) => (
                    <li
                      key={inx + 1}
                      data-aos={"fade-up"}
                      className="shop-grid__item"
                      data-aos-delay={`${inx + 1}00`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <Link to={pathnameSingl + "/singl-shop"}>
                        <div className="shop-grid__item-box">
                          <div className="shop-grid__item-img">
                            <img
                              src="https://picsum.photos/id/101/308/240"
                              alt=""
                            />
                            {item.discount_active ? <span>Sale</span> : ""}
                          </div>

                          <div className="shop-grid__item-desc">
                            <h5>Ball Joint TRW JBJ721</h5>
                            <span>Ball Joint</span>
                            <p>
                              $ 49.99{" "}
                              <span>
                                {item.discount_active
                                  ? "$ " + item.discount
                                  : ""}
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
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
