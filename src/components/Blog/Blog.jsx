import React from "react";
import Grid from "./Grid/Grid";
import Hero from "../../layouts/Hero/Hero";

export default function Blog() {
  return (
    <>
      <section className="blog">
        <Hero />
        <Grid pathnameSingl={"/blog"} />
      </section>
    </>
  );
}
