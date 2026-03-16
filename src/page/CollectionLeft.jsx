import { ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import EyeView from "../components/ui/EyeView";
import SaleBadge from "../components/ui/saleBadge";

const collectionsData = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "€190.00",
    pricecompare: "€299.00",
    colors: ["red", "orange", "black"],
  },
];

export default function CollectionLeft() {
  return (
    <main className="bg-white text-black min-h-screen pt-30">
      <section className=" max-h-screen w-full rounded-tr-4xl md:rounded-tr-[200px] rounded-bl-4xl md:rounded-bl-[200px] overflow-hidden relative">
        <img
          src="https://gain-demo-furniture.myshopify.com/cdn/shop/collections/banner-coffee-tables_3000x.png?v=1749727762"
          alt=""
          className=" w-full h-full object-cover"
        />
        <div className=" absolute inset-0 w-full h-full bg-black/25"></div>
        <div className=" absolute inset-0 flex justify-center items-center gap-2.5 text-2xl text-white font-bold">
          <Link to="/" className=" hover:text-black hover:border-b-2">
            Home
          </Link>
          / <span>coffee table</span>
        </div>
      </section>
      {/*  */}
      <section className="px-5 md:px-10 py-10 md:py-20">
        <h2 className="text-5xl text-start mb-10">Coffee Tables</h2>
        <div className="flex">
          {/* left */}
          <div className="max-w-62.5 w-full mr-10 text-start">
            <h3 className="text-2xl">Filters and sort</h3>
            <div className="py-2.5">
              <div className="product-filters__form-selected-wrapper js-selected-filters-wrapper is-hidden "></div>
              <div>
                <h2 className=" hidden border-b border-gray-2py-5">
                  Filte 0 rs
                </h2>

                {/* Availability */}
                <details className="border-y border-gray-200 group">
                  <summary className="flex justify-between w-full font-bold text-lg cursor-pointer list-none py-5">
                    Availability
                    <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                  </summary>

                  <ul className=" space-y-1 pb-5">
                    <li className="flex gap-2.5">
                      <input id="Filter-Availability-1" type="checkbox" />
                      <label htmlFor="Filter-Availability-1">
                        In stock (13)
                      </label>
                    </li>

                    <li className="flex gap-2.5">
                      <input id="Filter-Availability-2" type="checkbox" />
                      <label htmlFor="Filter-Availability-2">
                        Out of stock (1)
                      </label>
                    </li>
                  </ul>
                </details>

                {/* Size */}
                <details className="border-b border-gray-200 group">
                  <summary className="flex justify-between w-full font-bold text-lg cursor-pointer list-none py-5">
                    Size
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>

                  <ul className=" space-y-1 pb-5">
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-1" type="checkbox" />
                      <label htmlFor="Filter-Size-1">Small (4)</label>
                    </li>
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-2" type="checkbox" />
                      <label htmlFor="Filter-Size-2">Medium (3)</label>
                    </li>
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-3" type="checkbox" />
                      <label htmlFor="Filter-Size-3">Large (4)</label>
                    </li>
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-4" type="checkbox" />
                      <label htmlFor="Filter-Size-4">35x120x70 cm (1)</label>
                    </li>
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-5" type="checkbox" />
                      <label htmlFor="Filter-Size-5">35x120x80 cm (1)</label>
                    </li>
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-6" type="checkbox" />
                      <label htmlFor="Filter-Size-6">35x140x40 cm (1)</label>
                    </li>
                    <li className="flex gap-2.5">
                      <input id="Filter-Size-7" type="checkbox" />
                      <label htmlFor="Filter-Size-7">35x150x50 cm (1)</label>
                    </li>
                  </ul>
                </details>

                {/* Style */}
                <details className="border-b border-gray-200 group">
                  <summary className="flex justify-between w-full font-bold text-lg cursor-pointer list-none py-5">
                    Style
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>

                  <div id="filter-list-4" role="region">
                    <ul className=" space-y-1 pb-5">
                      <li className="flex gap-2.5">
                        <input id="Filter-Style-1" type="checkbox" />
                        <label htmlFor="Filter-Style-1">Cosmo (1)</label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Style-2" type="checkbox" />
                        <label htmlFor="Filter-Style-2">Icon (1)</label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Style-3" type="checkbox" />
                        <label htmlFor="Filter-Style-3">Rectangular (3)</label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Style-4" type="checkbox" />
                        <label htmlFor="Filter-Style-4">Round (2)</label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Style-5" type="checkbox" />
                        <label htmlFor="Filter-Style-5">Square (1)</label>
                      </li>
                    </ul>
                  </div>
                </details>

                {/* Product type */}
                <details className="border-b border-gray-200 group">
                  <summary className="flex justify-between w-full font-bold text-lg cursor-pointer list-none py-5">
                    Product type
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>

                  <div id="filter-list-5" role="region">
                    <ul className=" space-y-1 pb-5">
                      <li className="flex gap-2.5">
                        <input id="Filter-Product type-1" type="checkbox" />
                        <label htmlFor="Filter-Product type-1">
                          Coffee Tables (13)
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>

                {/* Color */}
                <details className="border-b border-gray-200 group">
                  <summary className="flex justify-between w-full font-bold text-lg cursor-pointer list-none py-5">
                    Color
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>

                  <div id="filter-list-6" role="region">
                    <ul className=" space-y-1 pb-5">
                      <li className="flex gap-2.5">
                        <input id="Filter-Color-1" type="checkbox" />
                        <label
                          className="filter-list__input-label checkbox__label filter-list__input-label--swatch"
                          htmlFor="Filter-Color-1"
                        >
                          <span className="checkbox__label-box"></span>
                          Black (6)
                        </label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Color-2" type="checkbox" />
                        <label
                          className="filter-list__input-label checkbox__label filter-list__input-label--swatch"
                          htmlFor="Filter-Color-2"
                        >
                          <span className="checkbox__label-box"></span>
                          Brown (7)
                        </label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Color-3" type="checkbox" />
                        <label
                          className="filter-list__input-label checkbox__label filter-list__input-label--swatch"
                          htmlFor="Filter-Color-3"
                        >
                          <span className="checkbox__label-box"></span>
                          Dark brown (1)
                        </label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Color-4" type="checkbox" />
                        <label
                          className="filter-list__input-label checkbox__label filter-list__input-label--swatch"
                          htmlFor="Filter-Color-4"
                        >
                          <span className="checkbox__label-box"></span>
                          Gray (1)
                        </label>
                      </li>
                      <li className="flex gap-2.5">
                        <input id="Filter-Color-5" type="checkbox" />
                        <label
                          className="filter-list__input-label checkbox__label filter-list__input-label--swatch"
                          htmlFor="Filter-Color-5"
                        >
                          <span className="checkbox__label-box"></span>
                          Natural (3)
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
            {Array(5)
              .fill(collectionsData)
              .flat()
              .map((list, index) => (
                <div
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
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
