import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const lists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/classic_sofas_c61f2b43-2608-412b-b85e-8829793e82c8.png?v=1747161753&width=360",
    label: "classic sofas",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/coffee_tables.png?v=1747208988&width=2253",
    label: "coffee tables",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/dining_tables.png?v=1747208901&width=360",
    label: "dining chairs",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/hall.png?v=1747209849&width=2253",
    label: "hall",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/ceiling_lights.png?v=1747209166&width=360",
    label: "ceiling lights",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/table_lamps.png?v=1747209212&width=360",
    label: "table lamps",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/vases.png?v=1747209568&width=360",
    label: "vases",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/textile.png?v=1747209624&width=360",
    label: "textiles",
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/collections/poufs_262bd2c4-2595-40a3-97ff-173507679e5a.png?v=1747162060&width=360",
    label: "poufs",
  },
];

export default function RightCategoriesList() {
  return (
    <>
      <section className="py-10 px-5">
        <Swiper
          effect={"coverflow"}
          grabCursor
          slidesPerView={1}
          spaceBetween={20}
          pagination
          navigation
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper_Cat_List pb-6!"
          style={{
            "--swiper-pagination-color": "black",
          }}
        >
          {lists.map((list, index) => (
            <SwiperSlide
              key={index}
              className="text-black text-xs uppercase text-start tracking-widest cursor-pointer relative group"
            >
              <img
                src={list.image}
                className="w-full h-full block rounded-xl aspect-square"
              />
              {list.label}
              <div className=" absolute inset-0 bg-white/50 group-hover:opacity-50 opacity-0 duration-500"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
