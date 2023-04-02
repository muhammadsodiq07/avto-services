import React from "react";
import "./ContactInfo.scss";

export default function ContactInfo() {
  const contactArr = [
    {
      id: 1,
      title: "CONTACT US",
      arr: [
        "+ 1 123 456-7890",
        "+ 1 123 456-7890",
        "promotors@email.com",
        "contact@email.com",
      ],
    },
    {
      id: 2,
      title: "ADDRESS",
      arr: [
        "19 Frisk Drive, Middletown,nj, 3348 United States",
        "31 S Division Street, Montour,ia, 50133 United States",
      ],
    },
  ];
  return (
    <section className="contactInfo">
      <div className="container">
        <div className="contactInfo__inner">
          <ul className="contactInfo__list">
            {contactArr !== undefined
              ? contactArr.map((item, index) => (
                  <li
                    className="contactInfo__item contactInfo__contact-box"
                    data-aos="zoom-in"
                    key={index}
                  >
                    <p className="contactInfo__get-text">{item.title}</p>
                    {item.arr.map((inner, indx) => (
                      <>
                        <div className="contactInfo__numbers" key={indx}>
                          <span>{inner}</span>
                        </div>
                      </>
                    ))}
                  </li>
                ))
              : ""}
          </ul>
          <div className="contactInfo__contact-box" data-aos="zoom-in">
            <p className="contactInfo__get-text">Open HOURS</p>
            <div className="contactInfo__hours-box">
              <ul className="contactInfo__hours">
                <li>
                  <p>Monday - Thuesday</p>
                  <span>8 am - 8</span>
                </li>
                <li>
                  <p>Friday</p> <span>8 am - 6 pm</span>
                </li>
                <li>
                  <p>Saturday</p> <span>9 am - 4 pm</span>
                </li>
                <li>
                  <p>Sunday</p> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
