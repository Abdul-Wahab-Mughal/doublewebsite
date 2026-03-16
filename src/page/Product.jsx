import {
  BadgePercent,
  ChevronLeft,
  Circle,
  FacebookIcon,
  Heart,
  InstagramIcon,
  Minus,
  MoveRight,
  Plus,
  Share2Icon,
  ShoppingCartIcon,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EyeView from "../components/ui/EyeView";
import TextImage from "../components/section/Left/TextImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
export default function Product() {
  const [openDescription, setOpenDescription] = useState(false);
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const decrease = () => qty > 1 && setQty(qty - 1);
  const increase = () => setQty(qty + 1);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <main className=" bg-white text-black pt-30 min-h-screen">
      <div className=" px-5 md:px-10 cursor-pointer w-fit">
        <div className="flex items-center" onClick={() => navigate(-1)}>
          <ChevronLeft />
          Back
        </div>
      </div>
      <section className="p-5 md:px-10 grid md:grid-cols-2 gap-5 text-start">
        {/* left */}
        <div className=" relative">
          <div className=" sticky top-0">
            <div>
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/H4RBRCBN-1_1482x.jpg?v=1747308543"
                alt=""
              />
            </div>
            <div className=" grid grid-cols-4 gap-2.5">
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/H4RBRCBN-1_1482x.jpg?v=1747308543"
                alt=""
                className=" border rounded-2xl"
              />
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/H4RBRCBN-1_1482x.jpg?v=1747308543"
                alt=""
                className=" border rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="space-y-2.5">
          <h2 className=" text-3xl uppercase">Mini vacuum cleaner</h2>
          <p className=" underline">InnovaGoods</p>
          <div className=" uppercase grid grid-cols-2">
            <p>2-Year Guatantee</p>
            <p>Delivery Tracking</p>
          </div>
          <div className=" grid grid-cols-3 gap-x-10 gap-y-5">
            <div className="flex flex-col gap-2.5">
              <span>Weight</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Ref.</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Pallet</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Box</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Mesasures</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>EAN</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
          </div>
          <div className="flex gap-2.5">
            <BadgePercent color="red" /> Special price for large quantites
          </div>
          {/* Special Price */}
          <div>
            <div className=" border-b px-5 py-1 flex justify-between">
              <span>Units</span>
              <span>Special Price</span>
            </div>
            <div className="px-5 py-1 flex justify-between">
              <span>+10</span>
              <span className="text-red-500">-3%</span>
            </div>
            <div className="px-5 py-1 flex justify-between">
              <span>+20</span>
              <span className="text-red-500">-6%</span>
            </div>
            <div className="px-5 py-1 flex justify-between">
              <span>+400</span>
              <span className="text-red-500">-15%</span>
            </div>
          </div>
          {/* Price */}
          <div className="bg-amber-200 grid grid-cols-4 rounded-2xl overflow-hidden">
            <div className=" grid grid-cols-2 gap-2.5 col-span-3 px-5 py-2.5 items-center">
              <span>RRP</span>
              <span className=" text-end text-4xl font-bold text-gray-800">
                20.58
              </span>
              <span>in shops</span>
              <span className=" text-end text-2xl">40.99</span>
            </div>
            <div className="bg-gray-800 flex justify-center items-center text-white text-2xl">
              -59%
            </div>
          </div>
          {/* quantity */}
          <span>Units</span>
          <div className="flex gap-5 pt-5">
            <div className="p-2.5 rounded-full border flex items-center gap-5">
              <button
                type="button"
                aria-label="Decrease quantity for Round Charcuterie Board"
                className=" disabled:text-gray-300 cursor-pointer"
                onClick={decrease}
                disabled={qty === 1}
              >
                <Minus />
              </button>

              <input
                type="number"
                name="quantity"
                id="Quantity"
                value={qty}
                min="1"
                max="10"
                step="1"
                className=" w-10 text-center appearance-none"
                disabled
              />

              <button
                type="button"
                aria-label="Increase quantity for Round Charcuterie Board"
                className="cursor-pointer"
                onClick={increase}
              >
                <Plus />
              </button>
            </div>
            <span className="flex items-center gap-2.5">
              <Circle color="green" fill="green" size={10} /> Available
            </span>
          </div>
          {/* Button */}
          <div className="flex gap-2.5">
            <button className="flex items-center justify-center gap-2.5 bg-(--btn) py-5 w-full rounded-lg cursor-pointer text-white hover:bg-(--btn)/75">
              <ShoppingCartIcon /> Add to cart
            </button>
            {/* 
            <div className=" flex justify-center items-center border rounded-lg p-5">
              <Heart size={20} />
            </div> 
            */}
          </div>
          {/* Description */}
          <div className="py-2.5 my-5 border-y border-gray-200">
            <div
              className=" uppercase underline flex items-center gap-5 group cursor-pointer text-xl"
              onClick={() => setOpenDescription(true)}
            >
              Description{" "}
              <div className="w-0 group-hover:w-full overflow-hidden duration-1000">
                <MoveRight size={25} />
              </div>
            </div>
            {/* open Description */}
            <div className=" group bg-amber-100">
              <div
                className={`fixed top-0 right-0 z-500 w-full h-full duration-500
                ${
                  openDescription
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }
                `}
              >
                <div
                  className={` absolute inset-0 bg-black/50 duration-500
                ${openDescription ? "visible" : "invisible"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenDescription(false);
                  }}
                ></div>
                <div
                  className={` bg-white max-w-138.75 relative overflow-hidden max-h-screen flex flex-col ml-auto duration-500 
                  ${openDescription ? "translate-x-0" : "translate-x-full"}
                  `}
                >
                  <div className=" relative p-5 md:px-10">
                    <h2 className=" text-3xl">Description</h2>
                    <button
                      className=" absolute top-5 right-5"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenDescription(false);
                      }}
                    >
                      <X />
                    </button>
                  </div>

                  <div className="px-5 md:px-10 pb-5 overflow-auto flex-1 space-y-5">
                    <p>
                      A stunning blend of rustic charm and modern design, the
                      Blue Round Charcuterie Board with natural wooden slats is
                      a versatile and stylish addition to your kitchen or dining
                      space. Handcrafted from reclaimed wood, this board
                      features a vibrant blue finish accented by two natural
                      wooden slats, creating a striking contrast that highlights
                      its artisanal craftsmanship. Its generously sized round
                      surface is perfect for serving an assortment of cheeses,
                      bread, fruits, or charcuterie, making it ideal for
                      entertaining or everyday use.
                    </p>
                    <p>
                      The natural texture and unique imperfections of the
                      reclaimed wood—such as knots and crevices—ensure that each
                      piece is truly one of a kind. A sturdy handle with an
                      attached rope allows for easy hanging and display when not
                      in use, adding a decorative touch to your kitchen or
                      dining area.
                    </p>
                    <p>
                      <strong>Weight:</strong> 2 kg
                    </p>
                    <h3 className="text-2xl">Care Instructions:</h3>
                    <ul className="space-y-2.5">
                      <li className=" list-disc list-inside">
                        Wipe clean with warm soapy water immediately after use
                        and dry thoroughly with a clean towel.
                      </li>
                      <li className=" list-disc list-inside">
                        Avoid soaking the board in water or using abrasive
                        cleaning products.
                      </li>
                      <li className=" list-disc list-inside">
                        Brightly colored foods like berries, turmeric, and
                        mustard may stain the surface. For tougher stains, refer
                        to eco-friendly cleaning solutions available on our
                        website.
                      </li>
                      <li className=" list-disc list-inside">
                        Treat occasionally with food-safe oil or wax to maintain
                        its vibrant finish and durability.
                      </li>
                    </ul>
                    <p>
                      Designed exclusively for serving and decorative purposes,
                      this board is not suitable for cutting or chopping. To
                      protect its surface, use parchment paper, plates, or bowls
                      as a barrier for wet or hot ingredients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* proudct */}
          <div className="w-full grid grid-cols-2 gap-5">
            {Array(2)
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
          {/* Share */}
          <div className=" flex gap-2.5 items-center py-10">
            <h3 className=" text-xl text-gray-500">Share:</h3>
            <div
              className=" p-2.5 border rounded-full h-fit w-fit cursor-pointer"
              onClick={handleShare}
            >
              <Share2Icon />
            </div>
            <a href="https://facebook.com" target="_blank">
              <div className=" p-2.5 border rounded-full h-fit w-fit">
                <FacebookIcon />
              </div>
            </a>
            <a href="https://Instagram.com" target="_blank">
              <div className=" p-2.5 border rounded-full h-fit w-fit">
                <InstagramIcon />
              </div>
            </a>
          </div>
        </div>
      </section>
      <TextImage
        subtitle="Quality Promise"
        title="Built to Last, Designed to Inspire"
        message="Behind every piece of furniture lies our commitment to excellence. We source only the finest materials from sustainable suppliers and employ traditional techniques refined over generations."
        btn="Explore"
        imageleft
        image1="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_8_curves-dining-table-ri-200014-side-chair-delaware-sfeer_672x.jpg?v=1749029618"
        image2="https://gain-demo-furniture.myshopify.com/cdn/shop/files/Web_Test-SW-MP-TABLE-Masterpiece-dining-tables-swatchset_2_c0f55a85-771b-4f5d-af8c-af2a6ae0fa76_912x.jpg?v=1747306695"
      />
      <section className=" text-start space-y-5 p-5 md:p-10">
        <h3 className="text-4xl">Recommendations</h3>
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
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper_Cat_List pb-6!"
          style={{
            "--swiper-pagination-color": "black",
          }}
        >
          {Array(4)
            .fill(collectionsData)
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
      </section>
    </main>
  );
}
