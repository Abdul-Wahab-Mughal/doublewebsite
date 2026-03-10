import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MoveLeft, MoveRight, Search } from "lucide-react";
import tables from "../../../assets/table.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SilderBannar() {
  const [current, setCurrent] = useState(1);
  const totalSlides = 3;
  const TextRefl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = TextRefl.current.querySelectorAll(".text-item");

      gsap.from(items, {
        y: 50, // start slightly below
        opacity: 0, // hidden
        duration: 0.5, // per item
        stagger: 0.1, // delay between items
        ease: "power2.out",
        scrollTrigger: {
          trigger: TextRefl.current,
          start: "top 80%", // when section enters viewport
          once: true, // run only once
          // markers: true, // remove in production
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const text_title = "Desgin Dream Spaces";

  return (
    <>
      <section ref={TextRefl} className="bg-white flex flex-col">
        <div className=" p-4 md:p-16 flex flex-col justify-center gap-5 relative text-black z-20">
          <div className="text-3xl md:text-5xl font-semibold pt-10 uppercase">
            {text_title.split("").map((word, i) => (
              <span key={i} className="text-item px-1">
                {word}
              </span>
            ))}
          </div>
          <p className="max-w-xl mx-auto">
            Design timeless spaces with sophisticated, beautifully made
            furniture that enhances every corner of your home.
          </p>
          <div className=" absolute -bottom-8 left-0 w-full ">
            <div className="max-w-250 m-auto flex px-5">
              <div className="p-5 bg-gray-200">category</div>
              <div className="w-full h-full flex items-center bg-white border border-gray-200 p-2.5">
                <input
                  type="text"
                  placeholder="Search 150+ global furniture brands"
                  name="serach"
                  className="w-full bg-white px-3 py-2.5 border-0"
                />
                <div className="py-2.5 border-0 px-5 bg-(--btn)">
                  <Search color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative max-md:h-125 max-h-200 h-full z-10">
          <Swiper
            loop
            className="mySwiper_home h-full"
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
            <SwiperSlide
              key="1"
              className="h-full md:h-125! max-h-200 relative"
            >
              <img
                src={tables}
                alt=""
                className=" absolute top-0 left-0  w-full h-full object-cover"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
              <div className="w-full h-full z-20 flex items-center">
                <div className="max-w-150 flex flex-col justify-center items-start gap-10 px-5 md:px-16 z-10">
                  <div className="text-5xl text-start">
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
            <SwiperSlide
              key="2"
              className="h-full md:h-125! max-h-200 relative"
            >
              <img
                src={tables}
                alt=""
                className=" absolute top-0 left-0  w-full h-full object-cover"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
              <div className="w-full h-full z-20 flex items-center">
                <div className="max-w-150 flex flex-col justify-center items-start gap-10 px-5 md:px-16 z-10">
                  <div className="text-5xl text-start">Upgrade Your Space</div>
                  <p className="text-start">
                    Discover exclusive discounts on enduring furniture designs –
                    up to 40% off curated collections. Free delivery over €500.
                    Limited quantities; claim your forever pieces before they’re
                    gone!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              key="3"
              className="h-full md:h-125! max-h-200 relative"
            >
              <img
                src={tables}
                alt=""
                className=" absolute top-0 left-0  w-full h-full object-cover"
              />
              <div className=" absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
              <div className="w-full h-full z-20 flex items-center">
                <div className="max-w-150 flex flex-col justify-center items-start gap-10 px-5 md:px-16 z-10">
                  <div className="text-6xl text-start">Grafted</div>
                  <p className="text-start">Luxury Furniture</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Custom buttons */}
          <div className="absolute bottom-10 md:left-20 z-30 max-md:w-full">
            <div className=" flex gap-3 justify-center">
              <span> {String(current).padStart(2, "0")}</span>
              <button className="prev-btn cursor-pointer">
                <MoveLeft size={20} className="text-white" />
              </button>
              <button className="next-btn cursor-pointer">
                <MoveRight size={20} className="text-white" />
              </button>
              <span>{String(totalSlides).padStart(2, "0")}</span>
            </div>
          </div>
          {/* Custom container */}
          <div className="flex justify-center absolute bottom-5 md:bottom-12 w-full">
            <div className="custom-pagination flex justify-center z-30 w-fit"></div>
          </div>
        </div>
      </section>
    </>
  );
}
