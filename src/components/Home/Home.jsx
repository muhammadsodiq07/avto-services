import "./Home.scss";
import React from "react";
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import Request from "./Request/Request";
import YourCar from "../About/YourCar/YourCar";
import InfoCounts from "./InfoCounts/InfoCounts";
import OurService from "./OurService/OurService";
import Categor from "./OurService/Categor/Categor";
import Malntenance from "./OurService/Malntenance/Malntenance";

export default function Home() {
  return (
    <>
      <section className="home">
        <Hero />
        <InfoCounts />
        <OurService
          serCount={6}
          pathname={"/home"}
          pathnameSingl={"/home/services"}
        />
        <Malntenance />
        <Categor pathnameSingl={"/home/services"} />
        {/* <YourCar /> */}
        <Popular />
        <Request />
      </section>
    </>
  );
}
