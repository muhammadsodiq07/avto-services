import React from "react";
import Book from "./Book/Book";
import YourCar from "./YourCar/YourCar";
import Hero from "../../layouts/Hero/Hero";
import AboutTeam from "./AboutTeam/AboutTeam";
import Conventient from "./Conventient/Conventient";
import OurServices from "./OurServices/OurServices";

export default function About() {
  return (
    <>
      <section className="about">
        <Hero pageName={"about"} />
        <Conventient />
        <OurServices pageNameSingl={"/about/services"} />
        <YourCar />
        <AboutTeam />
        <Book />
      </section>
    </>
  );
}
