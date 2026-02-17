import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import Silder from "../components/section/Silder";
import FourCard from "../components/section/FourCard";
import TextImage from "../components/section/TextImage";
import RightBannar from "../components/section/RightBannar";
import RightMarquee from "../components/section/RightMarquee";
import RightCategoriesList from "../components/section/RightCategoriesList";
import RightImageBannar from "../components/section/RightImageBannar";
import RightCountDown from "../components/section/RightCountDown";
import RightCollectionBox from "../components/section/RightCollectionBox";
import RightProductListSlide from "../components/section/RightProductListSlide";
import RightVideoBanner from "../components/section/RightVideoBanner";
import RightContentBannar from "../components/section/RightContentBannar";

const chairsLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$190.00",
    colors: ["red", "orange", "black"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$220.00",
    colors: ["red", "orange", "black", "white"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$125.00",
    colors: ["red", "orange"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$145.00",
    pricecompare: "$170.00",
    colors: ["red", "orange", "black"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$415.00",
    pricecompare: "$499.00",
    colors: ["red", "orange", "black"],
  },
];

const tableLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4.png?v=1747297114&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4hover1.png?v=1747297114&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$855.00",
    colors: ["red", "orange", "black"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4.png?v=1747297114&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4hover1.png?v=1747297114&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$880.00",
    colors: ["red", "orange", "black", "white"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4.png?v=1747297114&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4hover1.png?v=1747297114&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$560.00",
    colors: ["red", "orange"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4.png?v=1747297114&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4hover1.png?v=1747297114&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$667.00",
    pricecompare: "$170.00",
    colors: ["red", "orange", "black"],
  },
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4.png?v=1747297114&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningtable4hover1.png?v=1747297114&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$415.00",
    pricecompare: "$499.00",
    colors: ["red", "orange", "black"],
  },
];

const collectionsData = {
  chairs: chairsLists,
  tables: tableLists,
  lighting: chairsLists,
  storage: tableLists,
};
const collectionsData2 = {
  chairs: chairsLists,
};

export default function Home() {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const handlerHeaderLeft = () => {
    setRight(false);
    setLeft(true);
  };
  const handlerHeaderRight = () => {
    setRight(true);
    setLeft(false);
  };
  return (
    <>
      {/* Header */}
      <header className="w-full absolute top-0 left-0 z-50">
        <div className="relative w-full flex items-center justify-between overflow-hidden">
          {/* Right */}
          <button
            className="h-full w-32 md:w-[25%] p-3 relative flex flex-col items-center cursor-pointer rounded-br-4xl bg-black/50"
            title="Right click to enter Studio One"
            onClick={() => handlerHeaderLeft()}
          >
            <img src={reactLogo} alt="" />
            Left Home
          </button>

          {/* Left */}
          <button
            className="h-full w-32 md:w-[25%] p-3 relative flex flex-col items-center cursor-pointer rounded-bl-4xl bg-black/50"
            title="Right click to enter Studio One"
            onClick={() => handlerHeaderRight()}
          >
            <img src={reactLogo} alt="" />
            Right Home
          </button>
        </div>
      </header>
      {/* Left */}
      {left && (
        <div id="lefthome" className="">
          <Silder />
          <FourCard />
          <TextImage />
        </div>
      )}
      {/* Right */}
      {right && (
        <div id="righthome" className="bg-white">
          <RightBannar />
          <RightMarquee />
          <RightCategoriesList />
          <RightProductListSlide
            title="Most Loved Designs"
            subititle="Browse bestsellers and find the ideal furniture that complements your home and lifestyle."
            collectionsData={collectionsData}
          />
          <RightImageBannar />
          <RightProductListSlide
            title="Customer Favorites"
            subititle="Explore top-rated products that customers love for their quality and style."
            collectionsData={collectionsData2}
          />
          <RightCountDown />
          <RightCollectionBox />
          <RightVideoBanner />
          <RightProductListSlide
            title="Now Trending"
            subititle="Discover the newest pieces, fresh and ready to transform your space."
            collectionsData={collectionsData2}
          />
          <RightContentBannar />
        </div>
      )}
    </>
  );
}
