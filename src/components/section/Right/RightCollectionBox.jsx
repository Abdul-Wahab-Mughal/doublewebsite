import React, { useEffect, useRef } from "react";
import Button from "../../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Seating",
    link: "/collections/seating",
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/collection_13_1.jpg?v=1754033897&width=940",
  },
  {
    title: "Tables",
    link: "/collections/tables",
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/collection_14_1.jpg?v=1754033897&width=940",
  },
  {
    title: "Chairs",
    link: "/collections/chairs",
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/collection_15_1.jpg?v=1754033897&width=940",
  },
  {
    title: "Lighting",
    link: "/collections/lighting",
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/collection_16_1.jpg?v=1754033896&width=940",
  },
];

export default function RightCollectionBox() {
  const TextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".image_box", {
        backgroundPosition: "50% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: TextRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 5, // 👈 smooth + slow
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={TextRef} className="py-16">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="flex max-md:flex-col md:items-end justify-between mb-6 text-black">
          <div className="text-start space-y-2">
            <h3 className="uppercase font-semibold">Your Home, Your Savings</h3>
            <p className="max-w-md text-gray-500 max-md:mb-2.5">
              Furniture up to 50% off today. Now’s the perfect time to refresh
              your space with unbeatable savings.
            </p>
          </div>
          <Button>Shop Sale</Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Promo Banner */}
          <div className="relative md:row-span-2 col-span-2 overflow-hidden rounded-lg">
            <div
              className="image_box absolute w-full h-full"
              style={{
                backgroundImage:
                  "url('https://mart-harmonia.myshopify.com/cdn/shop/files/banner_image_2_3.jpg?v=1754033942&width=2000')",
                backgroundSize: "100% 150%",
                backgroundPosition: "50% 100%",
              }}
            >
              {/* <img
                src="https://mart-harmonia.myshopify.com/cdn/shop/files/banner_image_2_3.jpg?v=1754033942&width=2000"
                alt=""
                className=" image_box w-full h-full object-cover"
              /> */}
            </div>
            <div className=" absolute inset-0 bg-black/25"></div>
            <div className=" h-full w-full p-8 py-14 md:p-14 grid relative z-10">
              <h2 className=" text-5xl md:text-6xl font-semibold flex-1 mt-auto">
                SAVE 50% TODAY
              </h2>
              <p className=" md:text-lg flex-1 mt-auto">
                Transform your living space into a haven of comfort and style
                with stunning furniture.
              </p>
            </div>
          </div>

          {/* Cards */}
          {cards.map((card, index) => (
            <div key={index} className="relative group space-y-2">
              <div className=" relative overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover group-hover:scale-105 transition duration-500"
                />
                {/* <div className=" absolute inset-0 group-hover:bg-white/50"></div> */}
              </div>

              <a
                // href={card.link}
                className="absolute inset-0 cursor-pointer"
                aria-label={card.title}
              />

              <div className=" text-black text-xs tracking-widest flex items-center gap-2 uppercase">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
