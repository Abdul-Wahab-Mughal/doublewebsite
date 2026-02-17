import React, { useState } from "react";
import Button from "../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function RightProductListSlide({
  title,
  subititle,
  collectionsData,
}) {
  const [activeCategory, setActiveCategory] = useState("chairs");

  return (
    <section className="pb-5 md:py-10">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="flex max-md:flex-col md:items-end justify-between mb-6 text-black">
          <div className="text-start space-y-2">
            <h3 className="uppercase font-semibold">{title}</h3>
            <p className="max-w-md text-gray-500 max-md:mb-2.5">{subititle}</p>
          </div>
          <Button>Shop All</Button>
        </div>
        {/* Silder */}
        <div>
          <div className="flex gap-2.5 mb-5">
            {Object.keys(collectionsData).length <= 1 || (
              <>
                {Object.keys(collectionsData).map((name, index) => (
                  <div
                    className={`max-sm:flex-1 text-black px-4 py-1 rounded bg-gray-100 border capitalize cursor-pointer ${
                      activeCategory === name
                        ? " border-black"
                        : " border-gray-200"
                    }`}
                    key={index}
                    onClick={() => setActiveCategory(name.toLowerCase())}
                  >
                    {name}
                  </div>
                ))}
              </>
            )}
          </div>
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
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper_Cat_List pb-6!"
            style={{
              "--swiper-pagination-color": "black",
            }}
          >
            {collectionsData[activeCategory]?.map((list, index) => (
              <SwiperSlide
                key={index}
                className="text-black space-y-2.5 group cursor-pointer"
              >
                <div className=" relative overflow-hidden">
                  <img
                    src={list.image}
                    className="w-full h-full block rounded"
                  />
                  <img
                    src={list.hoverimage}
                    className="w-full h-full block rounded absolute inset-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className=" absolute bottom-0 w-full">
                    <button className=" text-xs font-semibold duration-250 translate-y-10 group-hover:-translate-y-7 hover:bg-gray-800 hover:text-white bg-white border border-gray-500 w-fit m-auto rounded px-4 py-2 uppercase cursor-pointer">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className=" text-sm font-bold flex justify-between">
                    {list.label}
                    {list.pricecompare && (
                      <span className="text-red-500">Sale</span>
                    )}
                  </div>
                  <div className="flex text-sm justify-between">
                    <span className=" font-semibold">
                      {list.price}{" "}
                      <span className="text-gray-500 line-through">
                        {list?.pricecompare}
                      </span>
                    </span>
                    <span className="text-gray-500">
                      + {list.colors?.length} Colours
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
