import { ChevronRightIcon } from "lucide-react";
import React from "react";
import Button from "../ui/Button";

export default function RightImageBannar() {
  return (
    <section className="relative h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://mart-harmonia.myshopify.com/cdn/shop/files/banner_image.jpg?v=1753956757&width=1780"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-black/25"></div>
      {/* Text */}
      <div className=" flex justify-evenly items-center m-auto w-full z-10">
        <div className=" text-4xl max-w-125 font-semibold">
          Where style meets comfort & every piece tells a story
        </div>
        <div className="">
          <div className=" text-6xl uppercase">50% off </div>
          <p className="text-xl">on Limited Items</p>
        </div>
      </div>
      <div className="absolute bottom-10">
        <Button  text="shop now"/>
      </div>
    </section>
  );
}
