import React, { useState } from "react";
import EyeView from "../../ui/EyeView";
import { MoveRight } from "lucide-react";

const BestSeller = [
  {
    tab: "Coffee Tables",
    image:
      "https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_12_cl-580523-icon-coffee-table-round-ml-sterling-carpet-ml-rally-sofa.jpg?crop=center&height=1306&v=1747307577&width=1260",
    title: "coffee tables",
    name: "Coffee table cosmo set",
    price: "€890,00",
  },
  {
    tab: "cupboard",
    image:
      "https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_5_mp-204006-cupboard-metropole-low-sfeer-2.jpg?crop=center&height=1306&v=1747305978&width=1260",
    title: "Cupboards",
    name: "Cupboard Metropole",
    price: "€1.900,00",
    pricecompare: "€2.020,00",
  },
  {
    tab: "dining chairs",
    image:
      "https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_9_mp-204725-writing-desk-metropole-plus-ml-521924-floor-lamp-es-canar-black-plus-side-chair-bloom-sfeer-1.jpg?crop=center&height=1306&v=1747305544&width=1260",
    title: "Counter Chairs",
    name: "Counter Chair Bloom",
    price: "€480,00",
  },
];

export default function BestSellerTab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" flex max-lg:flex-wrap p-5 lg:p-16 gap-5 overflow-hidden text-black max_width">
      <div className=" flex max-md:flex-col-reverse gap-5 w-full">
        <div className=" w-full md:w-1/2 md:pr-20">
          <div className=" relative overflow-hidden">
            {BestSeller?.map((data, index) => (
              <div
                key={index}
                className={`${
                  index === activeTab
                    ? " opacity-100 visible relative"
                    : " opacity-0 invisible absolute"
                } bg-white rounded-bl-4xl md:rounded-bl-[100px] rounded-tr-4xl md:rounded-tr-[150px] w-full duration-500`}
              >
                <div className=" relative group rounded-bl-4xl md:rounded-bl-[150px] rounded-tr-4xl md:rounded-tr-[150px] overflow-hidden">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full aspect-square group-hover:scale-105 duration-500"
                  />
                  <EyeView />
                </div>
                <div
                  className={`${
                    index === activeTab ? "translate-x-0" : ""
                  } flex items-center justify-between py-5 px-7 md:pl-20 -translate-x-full duration-500`}
                >
                  <div className="text-start">
                    <span className=" capitalize text-xs font-bold">
                      {data.title}
                    </span>
                    <div className=" capitalize border-b w-fit">
                      {data.name}
                    </div>
                  </div>
                  <div className=" text-sm font-bold">
                    {data.pricecompare ? (
                      <div className=" flex flex-col">
                        <span>{data.price}</span>
                        <span className=" line-through">
                          {data.pricecompare}
                        </span>
                      </div>
                    ) : (
                      <span>From {data.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full md:w-1/2 md:pl-10 text-start flex flex-col justify-center gap-x-5 gap-y-2.5 relative">
          <div className=" absolute inset-0">
            <div className="bkg"></div>
          </div>
          <div className="z-10">
            <div className=" text-3xl md:text-5xl font-script">
              Top-Rated Collections
            </div>
            <div className=" font-semibold text-2xl md:text-3xl">
              The collection everyone's talking about
            </div>

            <div className=" text-black md:text-gray-500/50 mt-5 md:mt-10">
              {BestSeller?.map((data, item) => (
                <div
                  key={item}
                  onMouseEnter={() => setActiveTab(item)}
                  className=" flex gap-10 items-center border-t border-b py-2.5 border-gray-500/25 group cursor-pointer"
                >
                  <MoveRight className=" duration-500 group-hover:text-black group-hover:translate-x-2.5" />
                  <span className=" capitalize text-2xl group-hover:text-black">
                    {data.tab}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
