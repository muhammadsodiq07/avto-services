import React from "react";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Shop from "../components/Shop/Shop";
import About from "../components/About/About";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Contacts from "../components/Contacts/Contacts";
import Services from "../components/Services/Services";
import SinglePost from "../components/Blog/SinglePost/SinglePost";
import SingleShop from "../components/Shop/SingleShop/SingleShop";
import SingleServices from "../components/Services/SingleServices/SingleServices";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home/services" element={<Services />} />
        <Route path="/singl-services" element={<SingleServices />} />
        <Route path="/blog/blog-singl-post" element={<SinglePost />} />
        <Route path="/home/blog/blog-singl-post" element={<SinglePost />} />
        <Route path="/services/singl-services" element={<SingleServices />} />
        <Route
          path="/home/services/singl-services"
          element={<SingleServices />}
        />
        <Route
          path="/about/services/singl-services"
          element={<SingleServices />}
        />
        <Route path="/home/shop/singl-shop" element={<SingleShop />} />
        <Route
          path="/shop/singl-shop"
          element={<SingleShop pathnameSingl={"/shop"} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
