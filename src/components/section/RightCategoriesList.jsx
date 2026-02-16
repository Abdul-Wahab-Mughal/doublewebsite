import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const lists = [
  {
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    label: "coffee tables",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    label: "dining chairs",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    label: "hall",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    label: "ceiling",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-5.jpg",
    label: "table lamps",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-6.jpg",
    label: "vases",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-7.jpg",
    label: "textiles",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-8.jpg",
    label: "classic sofas",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-9.jpg",
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
          slidesPerView={7}
          spaceBetween={20}
          pagination
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper_Cat_List pb-6!"
        >
          {lists.map((list, index) => (
            <SwiperSlide
              key={index}
              className="text-black uppercase tracking-widest"
            >
              <img
                src={list.image}
                className="w-full h-full block rounded-xl"
              />
              {list.label}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
