import React, { useState } from "react";
import "./ServicesOur.scss";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import ServicesInfo from "./ServicesInfo/ServicesInfo";
export default function ServicesOur() {
  const [servicesArr, setServicesArr] = useState([
    {
      id: 1,
      title: "Шиномонтаж, колеса",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 2,
      title: "Техническое обслуживание (ТО)",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 3,
      title: "Диагностика",
      active: false,
      arr: ["Шиномонтаж", "Замена колес"],
    },
    {
      id: 4,
      title: "Мойка",
      active: false,
      arr: ["Шиномонтаж", "Замена колес", "Балансировка", "Ремонт шин"],
    },
    {
      id: 5,
      title: "Развал-схождение",
      active: false,
      arr: ["Шиномонтаж"],
    },
    {
      id: 6,
      title: "Заправка кондиционера",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 7,
      title: "Подвеска, рулевое управление",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 8,
      title: "Работы с КПП, АКПП, трансмиссия",
      active: false,
      arr: ["Шиномонтаж", "Замена колес", "Балансировка", "Ремонт шин"],
    },
    {
      id: 9,
      title: "Система охлаждения",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 10,
      title: "Тормозная система",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 11,
      title: "Работы с двигателем",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 12,
      title: "Работы с электрикой",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
    {
      id: 13,
      title: "Прочие",
      active: false,
      arr: [
        "Шиномонтаж",
        "Замена колес",
        "Балансировка",
        "Ремонт шин",
        "Проверка развала-схождения",
        "Хранение колес",
      ],
    },
  ]);
  const handlerHover = (id) => {
    servicesArr.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setServicesArr([...servicesArr]);
  };
  return (
    <section className="servicesOur">
      <div className="container">
        <div className="servicesOur__inner" data-aos={"fade-up"}>
          <h3 className="servicesOur__title">Our Services</h3>
          <div className="servicesOur__main-box">
            <div className="servicesOur__left">
              <div className="servicesOur__left-border">
                <div className="servicesOur__input-box">
                  <div>
                    <input
                      type="text"
                      className="servicesOur__input"
                      placeholder="Быстрый поиск услуг"
                    />
                    <button type="button">
                      <HiOutlineSearch />
                    </button>
                  </div>
                </div>
                <ul className="servicesOur__list-left">
                  {servicesArr !== undefined
                    ? servicesArr.map((item, index) => (
                        <>
                          <li
                            className="servicesOur__item servicesOur__hover"
                            key={index}
                          >
                            {item.title}
                            <span>
                              <FiChevronDown />
                            </span>
                            <div className="servicesOur__info-box">
                              <p>{item.title}</p>
                              <ul className="">
                                {item.arr.map((info) => (
                                  <li>{info}</li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        </>
                      ))
                    : ""}
                </ul>
                <ul className="servicesOur__list-leftResponsive">
                  {servicesArr !== undefined
                    ? servicesArr.map((item, index) => (
                        <>
                          <li
                            className={`servicesOur__item-responsive ${
                              item.active
                                ? "servicesOur__item-height"
                                : "servicesOur__item-responsive"
                            }`}
                            key={index}
                          >
                            <div className="servicesOur__title-boxResponsive">
                              <p>{item.title}</p>
                              {item.active ? (
                                <button
                                  className="servicesOur__icon-span"
                                  onClick={() => handlerHover(false)}
                                >
                                  <span></span>
                                  <FiChevronDown color="#fff" size={20} />
                                  <span></span>
                                </button>
                              ) : (
                                <button
                                  className="servicesOur__icon-span"
                                  onClick={() => handlerHover(item.id)}
                                >
                                  <span></span>
                                  <FiChevronRight color="#fff" size={20} />
                                  <span></span>
                                </button>
                              )}
                            </div>
                            <div className="servicesOur__info-boxResponsive">
                              <p>{item.title}</p>
                              <ul className="">
                                {item.arr.map((info) => (
                                  <li>{info}</li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        </>
                      ))
                    : ""}
                </ul>
              </div>
            </div>
            <div className="servicesOur__right">
              <ServicesInfo pathnameSignl={"/services"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
