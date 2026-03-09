import React from "react";
import reactLogo from "../assets/react.svg";
import Silder from "../components/section/Left/Silder";
import FourCard from "../components/section/Left/FourCard";
import TextImage from "../components/section/Left/TextImage";

import ProductList from "../components/section/Left/ProductList";
import TwoImage from "../components/section/Left/TwoImage";
import FooterBannar from "../components/section/Left/FooterBannar";
import BestSellerTab from "../components/section/Left/BestSellerTab";
import FollowUs from "../components/section/Left/FollowUs";
import { Building, LucideLockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

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
        <Silder />
        <FourCard />
        <ProductList
          collectionsData={{ onsale: chairsLists, bestsellers: storageLists }}
        />
        <TextImage />
        <BestSellerTab />
        <TwoImage />
        <FooterBannar />
        <FollowUs />
        <div className=" fixed bottom-5 left-1 bg-(--btn) w-fit p-2 rounded-xl z-50 h-fit cursor-pointer">
          <a href="/contact">
            <div className="flex gap-2.5 border-r-2 pr-2 border-yellow-500">
              <div className="flex items-end">
                <Building />
                <LucideLockKeyhole size={10} color="yellow" />
              </div>
              zakelijk Inloggen
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
