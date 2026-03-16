import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import EyeView from "../../ui/EyeView";
import { Link } from "react-router-dom";
import SaleBadge from "../../ui/saleBadge";

gsap.registerPlugin(ScrollTrigger);

export default function ProductList({ collectionsData }) {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(collectionsData)[0]
  );

  const refProduct = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".productlist", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,

        ease: "power2.out",
        scrollTrigger: {
          trigger: refProduct.current,
          start: "top center",
          once: true,
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={refProduct}
      className=" flex flex-col max-lg:flex-wrap p-10 lg:p-16 overflow-hidden w-full max_width"
    >
      <div className="text-black text-start w-full">
        <div className="text-4xl font-script">Featured Products</div>
        <div className="text-xl md:text-4xl">
          Customer Favorites & Limited-Time Deals
        </div>
      </div>
      <div className="pt-5 w-full">
        <div className="flex gap-2.5 mb-5 border-b border-gray-500">
          {Object.keys(collectionsData).length <= 1 || (
            <>
              {Object.keys(collectionsData).map((name, index) => (
                <div
                  className={`max-sm:flex-1 text-black px-4 py-1 border-b capitalize cursor-pointer ${
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
          slidesPerView={2}
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
          {Array(7)
            .fill(collectionsData[activeCategory])
            .flat()
            .map((list, index) => (
              <SwiperSlide
                key={index}
                className="productlist text-black space-y-2.5 group cursor-pointer"
              >
                <div className=" relative overflow-hidden">
                  <Link to="/y/product">
                    <img
                      src={list.image}
                      className="w-full h-full block rounded"
                    />
                    <img
                      src={list.hoverimage}
                      className="w-full h-full block rounded absolute inset-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                    {/* sale */}
                    {list.pricecompare && (
                      <SaleBadge
                        price={list.price}
                        compare={list.pricecompare}
                      />
                    )}
                  </Link>
                  {/* Eye */}
                  <EyeView className="bottom-auto top-2.5 " bgblack />
                </div>
                <Link to="/y/product">
                  <div className="text-start flex gap-2 py-2.5">
                    {list.colors?.length &&
                      list.colors?.map((e, index) => (
                        <div
                          key={index}
                          className="rounded-full w-2.5 h-2.5"
                          style={{ background: e }}
                        />
                      ))}
                  </div>
                  <div className=" text-sm font-bold flex justify-between capitalize text-start">
                    {list.label}
                  </div>
                  <div className="flex text-sm justify-between">
                    <span
                      className={` font-semibold ${
                        list?.pricecompare && "text-red-500"
                      }`}
                    >
                      {list.price}{" "}
                      <span className="text-gray-500 line-through">
                        {list?.pricecompare}
                      </span>
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
