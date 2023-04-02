import React from "react";
import { useState } from "react";
import "./ContactMap.scss";

export default function ContactMap() {
  const [mapX, setMapX] = useState(0);
  const [mapY, setMapY] = useState(0);
  const mapArr = [
    {
      id: 1,
      title: "  16 Bison Mesa Avenue, North Las Vegas,nv, 89030 UnitedStates",
      time: "8 am - 8 pm",
      number: "+1-202-555-0124",
      mapX: 41.299354,
      mapY: 69.264879,
    },
    {
      id: 2,
      title: "  16 Bison Mesa Avenue, North Las Vegas,nv, 89030 UnitedStates",
      time: "8 am - 8 pm",
      number: "+1-202-555-0124",
      mapX: 24.471727,
      mapY: 39.611301,
    },
    {
      id: 3,
      title: "  16 Bison Mesa Avenue, North Las Vegas,nv, 89030 UnitedStates",
      time: "8 am - 8 pm",
      number: "+1-202-555-0124",
      mapX: 26.228564,
      mapY: 5.898454,
    },
  ];

  return (
    <section className="contactMap">
      <div className="container">
        <h3 className="contactMap__title">
          Promotors Shop and Service Locator
        </h3>
        <div className="contactMap__inner">
          <div className="contactMap__left">
            <div className="contactMap__select-box">
              <p>Your Location</p>
              <select>
                <option value="Select Your Zipcode">Select Your Zipcode</option>
                <option value="93101">93101</option>
                <option value="23301">23301</option>
                <option value="13832">13832</option>
                <option value="17931">17931</option>
              </select>
            </div>
            <ul className="contactMap__list">
              {mapArr !== undefined
                ? mapArr.map((item, index) => (
                    <li
                      data-aos={"fade-right"}
                      className="contactMap__item"
                      onClick={() => (setMapX(item.mapX), setMapY(item.mapY))}
                      key={index}
                    >
                      <div className="contactMap__item-box">
                        <div className="contactMap__img">
                          <img
                            src="https://klassen.de/media/images/news/original/2ry2y9v1mp5889016910ikefep1p70w5.jpg"
                            alt=""
                          />
                        </div>
                        <div className="contactMap__text-box">
                          <p className="contactMap__text">{item.title}</p>
                          <span className="contactMap__span">{item.time}</span>
                          <span className="contactMap__span">
                            {item.number}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
          <div className="contactMap__right" data-aos={"fade-left"}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13145969.231689952!2d${mapX}!3d${mapY}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1680157531586!5m2!1sru!2s`}
              width="600"
              height="450"
              loading="lazy"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
