import React from "react";
import Spend from "./Spend/Spend";
import Slider from "./Slider/Slider";
import Hero from "../../layouts/Hero/Hero";
import ShopGrid from "./ShopGrid/ShopGrid";
import Request from "../Home/Request/Request";
import YourCar from "../About/YourCar/YourCar";
import SingleShop from "./SingleShop/SingleShop";

export default function Shop() {
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
    {
      id: 6,
      title: "Signs Your Car Battery Has To Be Replaced",
      images: [
        "https://picsum.photos/id/142/425/255",
        "https://picsum.photos/id/141/425/255",
        "https://picsum.photos/id/143/425/255",
      ],
      month: "March",
      discount: 23.2,
      discount_active: true,
      day: 6,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 2,
          name: "repair",
        },
      ],
      categor: "Store",
    },
    {
      id: 7,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "April",
      discount: 23.2,
      discount_active: false,
      day: 7,
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
          name: "rotation",
        },
      ],
      categor: "Repair",
    },
    {
      id: 8,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 8,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "alignment",
        },
        {
          tagsId: 2,
          name: "tehnology",
        },
      ],
      categor: "Store",
    },
    {
      id: 9,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "April",
      discount: 23.2,
      discount_active: false,
      day: 9,
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
          name: "tire",
        },
      ],
      categor: "Store",
    },
    {
      id: 10,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "March",
      discount: 23.2,
      discount_active: true,
      day: 10,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "servicing",
        },
      ],
      categor: "Repair",
    },
    {
      id: 11,
      title: "Signs Your Car Battery Has To Be Replaced",
      images: [
        "https://picsum.photos/id/142/425/255",
        "https://picsum.photos/id/141/425/255",
        "https://picsum.photos/id/143/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 11,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "servicing",
        },
      ],
      categor: "Technology",
    },
    {
      id: 12,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "March",
      discount: 23.2,
      discount_active: false,
      day: 12,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "tehnology",
        },
        {
          tagsId: 2,
          name: "tire",
        },
      ],
      categor: "Sport Cars",
    },
    {
      id: 13,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "April",
      discount: 23.2,
      discount_active: true,
      day: 13,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "alignment",
        },
        {
          tagsId: 2,
          name: "repair",
        },
      ],
      categor: "Tuning",
    },
    {
      id: 14,
      title: "Signs Your Car Battery Has To Be Replaced",
      images: [
        "https://picsum.photos/id/142/425/255",
        "https://picsum.photos/id/141/425/255",
        "https://picsum.photos/id/143/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: false,
      day: 14,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "servicing",
        },
        {
          tagsId: 2,
          name: "electronic",
        },
      ],
      categor: "Store",
    },
    {
      id: 15,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 15,
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
          name: "electronic",
        },
      ],
      categor: "Store",
    },
    {
      id: 16,
      title: "Car Tune Up: Warning Signs & Complete Checklist",
      images: [
        "https://picsum.photos/id/412/425/255",
        "https://picsum.photos/id/411/425/255",
        "https://picsum.photos/id/413/425/255",
      ],
      month: "March",
      discount: 23.2,
      discount_active: false,
      day: 16,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "cleaning",
        },
      ],
      categor: "Store",
    },
    {
      id: 17,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 17,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "tehnology",
        },
      ],
      categor: "Repair",
    },
    {
      id: 18,
      title: "Signs Your Car Battery Has To Be Replaced",
      images: [
        "https://picsum.photos/id/142/425/255",
        "https://picsum.photos/id/141/425/255",
        "https://picsum.photos/id/143/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 18,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "electronic",
        },
      ],
      categor: "Store",
    },
    {
      id: 19,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "May",
      discount: 23.2,
      discount_active: true,
      day: 19,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "alignment",
        },
        {
          tagsId: 2,
          name: "rotation",
        },
      ],
      categor: "Sport Cars",
    },
    {
      id: 20,
      title: "What is a CVT Transmission? How It Works – Pros and Cons",
      images: [
        "https://picsum.photos/id/42/425/255",
        "https://picsum.photos/id/41/425/255",
        "https://picsum.photos/id/43/425/255",
      ],
      month: "March",
      discount: 23.2,
      discount_active: false,
      day: 20,
      year: 2023,
      comments_count: 10,
      desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
      tags: [
        {
          tagsId: 1,
          name: "speed",
        },
      ],
      categor: "Technology",
    },
  ];
  return (
    <>
      <section className="shop">
        {/* <SingleShop /> */}
        {/* <Spend /> */}
        <Hero />
        <ShopGrid data={data} pathnameSingl={"/shop"} />
        <YourCar />
        <Slider />
        <Request />
      </section>
    </>
  );
}
