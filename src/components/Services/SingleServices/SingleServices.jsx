import React from "react";
import "./SingleServices.scss";
import { useTranslation } from "react-i18next";
import OurService from "../../Home/OurService/OurService";
import Hero from "../../../layouts/Hero/Hero";

export default function SingleServices() {
  const { t } = useTranslation();
  const singleInfoArr = [
    {
      id: 1,
      title: "Est ullamcorper",
    },
    {
      id: 2,
      title: "Nulla facilisi etiam",
    },
    {
      id: 3,
      title: "Ignissim diam quis",
    },
    {
      id: 4,
      title: "Donec ultrices tincidunt",
    },
    {
      id: 5,
      title: "Arcu non sodales",
    },
    {
      id: 6,
      title: " Feugiat scelerisque varius ",
    },
    {
      id: 7,
      title: "Morbi enim nunc faucibus",
    },
    {
      id: 8,
      title: "In egestas erat imperdiet",
    },
    {
      id: 9,
      title: "Ignissim diam quis",
    },
    {
      id: 10,
      title: "Donec ultrices tincidunt",
    },
    {
      id: 11,
      title: "Arcu non sodales",
    },
    {
      id: 12,
      title: " Feugiat scelerisque varius ",
    },
  ];
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
    <section className="SingleServices">
      <Hero title={"Detailing Services"} />

      <div className="container">
        <div className="SingleServices__inner">
          <div className="SingleServices__left">
            <div className="SingleServices__img">
              <img
                src="https://wallpapers.com/images/hd/4k-bmw-in-underground-road-86owcoo79z8fo3ra.jpg"
                alt=""
              />
            </div>

            <div>
              <p className="SingleServices__text">
                Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris
                cursus. Ipsum dolor sit amet consectetur adipiscing elit duis
                tristique sollicitudin. Nulla posuere sollicitudin aliquam
                ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet.
                Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales
                ut etiam sit amet nisl purus in mollis. Ultrices neque ornare
                aenean euismod elementum nisi quis. Vel turpis nunc eget lorem
                dolor sed viverra. Orci nulla pellentesque dignissim enim sit
                amet venenatis urna. Porttitor lacus luctus accumsan tortor
                posuere ac ut. Sed tempus urna et pharetra pharetra massa massa
                ultricies.{" "}
              </p>
            </div>

            <ul className="SingleServices__list">
              {singleInfoArr !== undefined
                ? singleInfoArr.map((item, index) => (
                    <li className="SingleServices__item" key={index}>
                      <span></span>
                      <p>{item.title}</p>
                    </li>
                  ))
                : ""}
            </ul>
          </div>

          <div className="SingleServices__right">
            <ul className="SingleServices__right-list">
              {contactArr !== undefined
                ? contactArr.map((item, index) => (
                    <li className="SingleServices__contact-box" key={index}>
                      <p className="SingleServices__get-text">{item.title}</p>
                      {item.arr.map((inner, indx) => (
                        <>
                          <div className="SingleServices__numbers" key={indx}>
                            <span>{inner}</span>
                          </div>
                        </>
                      ))}
                    </li>
                  ))
                : ""}
            </ul>
            <div className="SingleServices__contact-box SingleServices__contact-div">
              <p className="SingleServices__get-text">Open HOURS</p>
              <div className="SingleServices__hours-box">
                <ul className="SingleServices__hours">
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
      </div>
      <OurService pathname={""} pathnameSingl={"/services"} serCount={3} />
    </section>
  );
}
