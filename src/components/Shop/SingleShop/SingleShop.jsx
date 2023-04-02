import React from "react";
import "./SingleShop.scss";
import Spend from "../Spend/Spend";
import ShopGrid from "../ShopGrid/ShopGrid";
import { BsStarFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SingleInfo from "../SingleInfo/SingleInfo";

export default function SingleShop() {
  const { t } = useTranslation();
  const location = useLocation();
  const data = [
    {
      id: 1,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 1,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "alignment",
        },
      ],
      categor: "Store",
    },
    {
      id: 2,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "April",
      discount: 23.2,
      discount_active: false,
      day: 2,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "rotation",
        },
        {
          tagsId: 2,
          name: "electronic",
        },
      ],
      categor: "Repair",
    },
    {
      id: 3,
      title: "Signs Your Car Battery Has To Be Replaced",
      images: [
        "https://picsum.photos/id/142/425/255",
        "https://picsum.photos/id/141/425/255",
        "https://picsum.photos/id/143/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 3,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "speed",
        },
        {
          tagsId: 2,
          name: "electronic",
        },
      ],
      categor: "Tuning",
    },
    {
      id: 4,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "April",
      discount: 23.2,
      discount_active: true,
      day: 4,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "tire",
        },
        {
          tagsId: 2,
          name: "cleaning",
        },
      ],
      categor: "Sport Cars",
    },
    {
      id: 5,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "March",
      discount: 23.2,
      discount_active: false,
      day: 5,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "tire",
        },
      ],
      categor: "Technology",
    },
  ];
  return (
    <section className="singleShop">
      <div className="container">
        <div className="singleShop__inner">
          <ul className="hero__pathnames-list">
            {location.pathname.split("/").map((item, inx) =>
              inx + 1 > 1 ? (
                <li className="hero__pathnames-item">
                  <p>{t(item)}</p>
                  <span></span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>

          <h3 className="singleShop__title">Silentblock damper M12 Ø 75mm</h3>
          <span className="singleShop__span">$20.99</span>
          <div className="singleShop__icons">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <p className="singleShop__text">
            Nisl purus in mollis nunc sed id. Nunc sed velit dignissim sodales
            ut eu sem. c scelerisque fermentum dui faucibus in ornare. Nisl
            condimentum id venenatis a condimentum. Id consectetur purus ut
            faucibus pulvinar
          </p>
          <button className="singleShop__btn">
            buy now
            <span></span>
            <span></span>
          </button>
          <div className="singleShop__span-box">
            <span>CATEGORIES: AUTOMATIC, MECHANIC</span>
            <span>SKU: 01289</span>
            <span>TAGS: ENERGY, SPEED, SYSTEM</span>
          </div>
        </div>
        <SingleInfo />
      </div>
      <Spend />
      <div className="singleShop__products">
        <div className="container">
          <h4 className="singleShop__products-title">{t("other-products")}</h4>
        </div>

        <ShopGrid data={data} pathnameSingl={"/shop"} />
      </div>
    </section>
  );
}
