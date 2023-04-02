import React from "react";
import "./SinglePost.scss";
import { useTranslation } from "react-i18next";
import PopularItems from "../../Home/Popular/PopularItems/PopularItems";
import Hero from "../../../layouts/Hero/Hero";

export default function SinglePost() {
  const { t } = useTranslation();
  return (
    <section className="singlePost">
      <Hero title={"Warning Signs & Complete Checklist"}/>
      <div className="container">
        <div className="singlePost__inner">
          <ul className="singlePost__list">
            <li className="singlePost__item">
              <div className="singlePost__img">
                <img
                  src="https://picstatio.com/large/b382f0/bmw-m4-gt4-competition-package-4k.jpg"
                  alt=""
                />
              </div>
              <div className="singlePost__item-inner">
                <div className="singlePost__span-box">
                  <span>May, 29 2022</span>
                  <span>No Comments</span>
                </div>
                <p className="singlePost__title">What Is an Auto Tune Up?</p>
                <p className="singlePost__text">
                  Aliquam sem et tortor consequat id porta. In fermentum posuere
                  urna nec tincidunt praesent semper feugiat nibh. Amet nisl
                  purus in mollis. Neque convallis a cras semper auctor neque
                  vitae tempus. Facilisis volutpat est velit egestas dui. Eget
                  mi proin sed libero enim sed faucibus. Ac turpis egestas sed
                  tempus urna et pharetra. Viverra nam libero justo laoreet sit
                  amet.{" "}
                </p>
                <p className="singlePost__text">
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Auctor
                  elit sed vulputate mi sit amet mauris. Fermentum dui faucibus
                  in ornare quam viverra. Nulla pellentesque dignissim enim sit
                  amet venenatis urna. Nulla posuere sollicitudin aliquam
                  ultrices sagittis. Turpis egestas sed tempus urna et pharetra
                  pharetra massa massa. Volutpat lacus laoreet non curabitur
                  gravida arcu. Eleifend donec pretium vulputate sapien nec
                  sagittis aliquam malesuada bibendum. Donec ultrices tincidunt
                  arcu non sodales neque sodales. Ultrices eros in cursus turpis
                  massa tincidunt dui. Nec feugiat in fermentum posuere urna.
                  Semper eget duis at tellus at urna. Sapien et ligula
                  ullamcorper malesuada proin libero nunc consequat interdum.
                </p>
              </div>
            </li>
            <li className="singlePost__item">
              <div className="singlePost__box">
                <div className="singlePost__img-box">
                  <img
                    src="https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/02/23/11/5257679/99dbfd39568b719f61108689f094d20d46349ae1.jpg"
                    alt=""
                  />
                </div>
                <div className="singlePost__img-box">
                  <img
                    src="https://www.trackdayforum.com/uploads/monthly_2021_12/DSC06343.jpg.64b483ebdda1e00c7a4accc0b1783e6a.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="singlePost__item-inner">
                <p className="singlePost__title">
                  Signs Your Car Needs A Tune Up
                </p>
                <p className="singlePost__text">
                  Eleifend quam adipiscing vitae proin. Scelerisque eu ultrices
                  vitae auctor eu augue ut. Amet cursus sit amet dictum sit
                  amet. Tincidunt nunc pulvinar sapien et ligula ullamcorper.
                  Felis donec et odio pellentesque diam volutpat commodo.
                  Consequat semper viverra nam libero justo laoreet sit. Massa
                  massa ultricies mi quis hendrerit dolor. Faucibus a
                  pellentesque sit amet porttitor eget.
                </p>
                <p className="singlePost__text">
                  Rhoncus urna neque viverra justo nec ultrices dui sapien. Enim
                  praesent elementum facilisis leo vel fringilla est. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Consectetur adipiscing elit ut aliquam purus sit amet luctus
                  venenatis. Morbi quis commodo odio aenean sed adipiscing diam.
                  Aenean et tortor at risus viverra adipiscing at in. Molestie a
                  iaculis at erat pellentesque. Aliquam sem fringilla ut morbi
                  tincidunt augue. Ut pharetra sit amet aliquam. Imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus iaculis.
                </p>
                <p className="singlePost__title">
                  Signs Your Car Needs A Tune Up
                </p>
                <p className="singlePost__text">
                  Ac auctor augue mauris augue neque gravida in fermentum.
                  Adipiscing diam donec adipiscing tristique risus nec feugiat
                  in fermentum. Ullamcorper sit amet risus nullam eget felis
                  eget nunc. Sit amet volutpat consequat mauris nunc congue nisi
                  vitae.
                </p>
                <div className="singlePost__item-inner-img">
                  <img
                    src="https://www.hdcarwallpapers.com/download/bmw_m4_custom_cgi_4k-3840x2160.jpg"
                    alt=""
                  />
                </div>
                <p className="singlePost__text">
                  Rhoncus urna neque viverra justo nec ultrices dui sapien. Enim
                  praesent elementum facilisis leo vel fringilla est. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Consectetur adipiscing elit ut aliquam purus sit amet luctus
                  venenatis. Morbi quis commodo odio aenean sed adipiscing diam.
                  Aenean et tortor at risus viverra adipiscing at in. Molestie a
                  iaculis at erat pellentesque. Aliquam sem fringilla ut morbi
                  tincidunt augue. Ut pharetra sit amet aliquam. Imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus iaculis.
                </p>
              </div>
            </li>
          </ul>

          <div className="__other-posts">
            <h3 className="home-popular__title">{t("popular-articles")}</h3>
            <PopularItems pathnameSingl={"/blog"} />
          </div>
        </div>
      </div>
    </section>
  );
}
