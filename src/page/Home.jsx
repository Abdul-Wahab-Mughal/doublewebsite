import React from "react";
import reactLogo from "../assets/react.svg";
import SilderBannar from "../components/section/Left/SilderBannar";
import FourCard from "../components/section/Left/FourCard";
import TextImage from "../components/section/Left/TextImage";
import ProductList from "../components/section/Left/ProductList";
import TwoImage from "../components/section/Left/TwoImage";
import FooterBannar from "../components/section/Left/FooterBannar";
import BestSellerTab from "../components/section/Left/BestSellerTab";
import FollowUs from "../components/section/Left/FollowUs";
import { Building, LucideLockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import RightCategoriesList from "../components/section/Right/RightCategoriesList";

const chairsLists = [
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

const storageLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/shelves4color1.png?v=1747340615&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/shelves4color1hover.png?v=1747340615&width=940",
    label: "Arc floor lamp",
    price: "€855.00",
    pricecompare: "€999.00",
    colors: ["red", "orange", "black"],
  },
];

export default function Home() {
  return (
    <>
      <div id="lefthome" className="bg-[#FBFBFB]">
        <SilderBannar />
        <FourCard />
        <ProductList
          collectionsData={{ onsale: chairsLists, bestsellers: storageLists }}
        />
        <TextImage
          subtitle="Made by Deco"
          title="In-House"
          message="
            Crafted in our own workshops using reclaimed teak and durable metal.
            Honest materials, timeless style — built to last."
          btn="View More"
          image1="https://gain-demo-furniture.myshopify.com/cdn/shop/files/MA_940346_Einstein_dining_table-ML_749533_Bloom_bench-ML_749515_Bloom_side_chair-ML_461107_Baba_sf1_DTP_2ded81e4-9341-430e-a41f-4cdb4416da03_456x.webp?v=1749535587"
          image2="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_4_ti-428126-cabinet-beam-large-sfeer-1_c5be6687-6830-4858-88a0-ed6c91676b0b_620x.jpg?v=1749448842"
        />
        <BestSellerTab />
        <TwoImage />
        <FooterBannar />
        <RightCategoriesList />
        <div className=" fixed bottom-5 left-1 bg-(--btn) w-fit p-2 rounded-xl z-50 h-fit cursor-pointer">
          <Link to="/contact">
            <div className="flex gap-2.5 border-r-2 pr-2 border-yellow-500">
              <div className="flex items-end">
                <Building />
                <LucideLockKeyhole size={10} color="yellow" />
              </div>
              zakelijk Inloggen
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
