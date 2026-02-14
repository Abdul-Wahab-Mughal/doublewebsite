import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Silder() {
  const [current, setCurrent] = useState(1);
  const totalSlides = 3;

  return (
    <section className=" relative">
      <Swiper
        loop
        className="mySwiper_home"
        autoplay={{ delay: 2500 }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        onSlideChange={(swiper) => {
          setCurrent(swiper.realIndex + 1);
        }}
      >
        <SwiperSlide key="1" className="h-screen! relative">
          <img
            src="/src/assets/table.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
          <div className=" absolute top-0 left-0 w-full h-full z-20 flex items-center">
            <div className="max-w-150 flex flex-col items-start gap-10 px-16">
              <div className="text-4xl text-start">
                Excellence for Every Room
              </div>
              <p className="text-start">
                Whether redesigning your living room or searching for the
                perfect bedroom ensemble, our handmade furniture offers
                unparalleled quality and beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="2" className="h-screen! relative">
          <img
            src="/src/assets/table.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
          <div className=" absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center">
            <div className="max-w-150 flex flex-col items-start gap-10 px-16">
              <div className="text-4xl text-start">Upgrade Your Space</div>
              <p className="text-start">
                Discover exclusive discounts on enduring furniture designs – up
                to 40% off curated collections. Free delivery over €500. Limited
                quantities; claim your forever pieces before they’re gone!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="3" className="h-screen! relative">
          <img
            src="/src/assets/table.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
          <div className=" absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center">
            <div className="max-w-150 flex flex-col items-start gap-10 px-16">
              <div className="text-4xl text-start">Grafted</div>
              <p className="text-start">Luxury Furniture</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom buttons */}
      <div className="absolute bottom-10 left-20 z-30 flex gap-3">
        <span> {String(current).padStart(2, "0")}</span>
        <button className="prev-btn cursor-pointer">
          <MoveLeft size={20} className="text-white" />
        </button>
        <button className="next-btn cursor-pointer">
          <MoveRight size={20} className="text-white" />
        </button>
        <span>{String(totalSlides).padStart(2, "0")}</span>
      </div>
      {/* Custom container */}
      <div className="flex justify-center absolute bottom-12 w-full">
        <div className="custom-pagination flex justify-center z-30 w-fit"></div>
      </div>
    </section>
  );
}
