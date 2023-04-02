import "./Slider.scss";
import "@splidejs/react-splide/css";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../../../assets/images/home-popular-1.png";
import img2 from "../../../assets/images/home-popular-2.png";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// SAMANDAR
export default function Slider() {
  const [activeImg, setActiveImg] = useState(0);
  const [img, setImg] = useState();
  const { t } = useTranslation();
  const arr = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img1,
    },
    {
      id: 4,
      img: img2,
    },
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img2,
    },
    {
      id: 7,
      img: img1,
    },
    {
      id: 8,
      img: img2,
    },
  ];

  return (
    <>
      <section className="shop-slider">
        <h3 className="shop-slider__title">
          {t("best-multi-brand-car-repair-service")}
        </h3>

        <Splide
          options={{
            perPage: 6,
            type: "loop",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
        >
          {arr !== undefined
            ? arr.map((item, inx) => (
                <SplideSlide
                  key={inx + 1}
                  onClick={() => (setImg(item.img), setActiveImg(item.id))}
                >
                  <img src={item.img} alt="" />
                </SplideSlide>
              ))
            : ""}
        </Splide>
      </section>

      {activeImg ? (
        <div className="shop-slider__activeImg">
          <div onClick={() => setActiveImg(0)}>
            <button onClick={() => setActiveImg(0)}>
              <IoClose />
            </button>
          </div>

          <img src={img} alt="" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
