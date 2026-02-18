import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import Silder from "../components/section/Left/Silder";
import FourCard from "../components/section/Left/FourCard";
import TextImage from "../components/section/Left/TextImage";
import RightBannar from "../components/section/Right/RightBannar";
import RightMarquee from "../components/section/Right/RightMarquee";
import RightCategoriesList from "../components/section/Right/RightCategoriesList";
import RightImageBannar from "../components/section/Right/RightImageBannar";
import RightCountDown from "../components/section/Right/RightCountDown";
import RightCollectionBox from "../components/section/Right/RightCollectionBox";
import RightProductListSlide from "../components/section/Right/RightProductListSlide";
import RightVideoBanner from "../components/section/Right/RightVideoBanner";
import RightContentBannar from "../components/section/Right/RightContentBannar";
import ProductList from "../components/section/Left/ProductList";
import TwoImage from "../components/section/Left/TwoImage";
import FooterBannar from "../components/section/Left/FooterBannar";

const chairsLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "$190.00",
    pricecompare: "$299.00",
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
    pricecompare: "$999.00",
    colors: ["red", "orange", "black"],
  },
];

const lightingLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/floorlamp1color1.png?v=1747246376&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/floorlamp1color1hover.png?v=1747246376&width=940",
    label: "Arc floor lamp",
    price: "$855.00",
    pricecompare: "$999.00",
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
    price: "$855.00",
    pricecompare: "$999.00",
    colors: ["red", "orange", "black"],
  },
];

const favoritesLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningchairs5color1.png?v=1747251927&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningchairs5color1hover.png?v=1747251927&width=940",
    label: "Upholstered dininh=g aremchair",
    price: "$210.00",
    pricecompare: "$499.00",
    colors: ["red", "orange", "black"],
  },
];

const trendingLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningchairs4color1.png?v=1747251838&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningchairs4color2.png?v=1747251838&width=940",
    label: "Classic Wooden Dining Chair",
    price: "$210.00",
  },
];

const workspaceLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/floorlamp1color1.png?v=1747246376&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/floorlamp1color1hover.png?v=1747246376&width=940",
    label: "Arc floor lamp",
    price: "$855.00",
    pricecompare: "$999.00",
    colors: ["red", "orange", "black"],
  },
];

const accessoriesLists = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningchairs4color1.png?v=1747251838&width=940",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/diningchairs4color2.png?v=1747251838&width=940",
    label: "Classic Wooden Dining Chair",
    price: "$210.00",
  },
];

export default function Home() {
  const [left, setLeft] = useState(true);

  const handlerHeaderLeft = () => {
    setLeft(true);
  };
  const handlerHeaderRight = () => {
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
        <div id="lefthome" className="bg-white">
          <Silder />
          <FourCard />
          <ProductList
            collectionsData={{ onsale: chairsLists, bestsellers: storageLists }}
          />
          <TextImage />
          <TwoImage />
          {/*  */}
          <FooterBannar />
        </div>
      )}
      {/* Right */}
      {!left && (
        <div id="righthome" className="bg-white">
          <RightBannar />
          <RightMarquee />
          <RightCategoriesList />
          <RightProductListSlide
            title="Most Loved Designs"
            subititle="Browse bestsellers and find the ideal furniture that complements your home and lifestyle."
            collectionsData={{
              chairs: chairsLists,
              tables: tableLists,
              lighting: lightingLists,
              storage: storageLists,
            }}
          />
          <RightImageBannar />
          <RightProductListSlide
            title="Customer Favorites"
            subititle="Explore top-rated products that customers love for their quality and style."
            collectionsData={{ favorites: favoritesLists }}
          />
          <RightCountDown />
          <RightCollectionBox />
          <RightVideoBanner />
          <RightProductListSlide
            title="Now Trending"
            subititle="Discover the newest pieces, fresh and ready to transform your space."
            collectionsData={{ trending: trendingLists }}
          />
          <RightContentBannar />
          <RightProductListSlide
            title="Crafted for Your Life"
            subititle="From modern minimalism to classic elegance, explore furniture that balances design with practicality."
            collectionsData={{
              workspace: workspaceLists,
              accessories: accessoriesLists,
              bedroom: workspaceLists,
              hall: accessoriesLists,
              storage: storageLists,
            }}
          />
        </div>
      )}
    </>
  );
}
