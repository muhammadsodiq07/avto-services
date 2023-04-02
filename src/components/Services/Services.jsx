import React from "react";
import Hero from "../../layouts/Hero/Hero";
import YourCar from "../About/YourCar/YourCar";
import Categor from "../Home/OurService/Categor/Categor";
import Slider from "../Shop/Slider/Slider";
import ServicesOur from "./OurServices/ServicesOur";

export default function Services() {
  return (
    <>
      <section className="services">
        <Hero />
        <ServicesOur />
        <Categor pathnameSingl={"/services"}/>
        <Slider />
        <YourCar />
      </section>
    </>
  );
}
