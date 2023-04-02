import React from "react";
import "./Additional.scss";

export default function Additional() {
  const arr = [
    {
      id: 1,
      text: "Repair Kit Type",
      decs: "Maintenance Kit",
    },
    {
      id: 2,
      text: "Number of Pieces	",
      decs: "1",
    },
    {
      id: 3,
      text: "Package Depth (cm)",
      decs: "22.61 cm",
    },
    {
      id: 4,
      text: "Package Depth (in)",
      decs: "8.90 in",
    },
    {
      id: 5,
      text: "Package Height (cm)",
      decs: "6.86 cm",
    },
  ];
  return (
    <section className="additional">
      <div className="additional__inner">
        <ul className="additional__list">
          {arr !== undefined
            ? arr.map((item, index) => (
                <li className="additional__item" key={index}>
                  <p>{item.text}</p>
                  <span>{item.decs}</span>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </section>
  );
}
