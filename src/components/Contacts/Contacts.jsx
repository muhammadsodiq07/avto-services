import React from "react";
import ContactMap from "./ContactMap/ContactMap";
import ContactInfo from "./ContactInfo/ContactInfo";
import Hero from "../../layouts/Hero/Hero";

export default function Contacts() {
  return (
    <>
      <section className="contacts">
        <Hero pageName={"Contacts"}/>
        <ContactInfo />
        <ContactMap />
      </section>
    </>
  );
}
