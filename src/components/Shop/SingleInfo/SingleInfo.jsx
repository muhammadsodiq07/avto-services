import "./SingleInfo.scss";
import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import Additional from "./Additional/Additional";
import Description from "./Description/Description";

export default function SingleInfo() {
  const infoArr = [
    {
      id: 1,
      title: "Description",
    },
    {
      id: 2,
      title: "Additional information",
    },
    {
      id: 3,
      title: "Reviews",
    },
  ];
  const [actID, setActID] = useState(1);

  return (
    <section className="singleInfo">
      <div className="singleInfo__inner">
        <ul className="singleInfo__list">
          {infoArr !== undefined
            ? infoArr.map((item, index) => (
                <li
                  className={`singleInfo__item ${
                    item.id === actID ? "singleInfo__item-acvtive" : ""
                  }`}
                  key={index}
                  onClick={() => setActID(item.id)}
                >
                  {item.title}
                </li>
              ))
            : " "}
        </ul>
        <ul className="singleInfo__info-list">
          {1 === actID ? (
            <Description />
          ) : 2 === actID ? (
            <Additional />
          ) : 3 === actID ? (
            <Reviews />
          ) : (
            ""
          )}
        </ul>
      </div>
    </section>
  );
}
