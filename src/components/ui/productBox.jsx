import { X } from "lucide-react";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import ButtonLeft from "./ButtonLeft";

export default function ProductBox({ onClick }) {
  const boxRef = useRef();
  const [selectedSetQuantity, setSelectedSetQuantity] = useState("2");
  const [selectedStyle, setSelectedStyle] = useState("2");

  const handleOutsideClick = (e) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      onClick();
    }
  };
  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 z-30 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div
        ref={boxRef}
        className="bg-white max-w-[70%] max-h-[90%] rounded-tl-4xl rounded-br-4xl text-black relative overflow-hidden p-5"
      >
        <X
          onClick={onClick}
          size={24}
          className=" absolute top-2.5 right-2.5 cursor-pointer"
        />
        <div className="grid grid-cols-2">
          <div>
            <img
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_1_dtp-home-cosmo-salontafel-vierkant_884x.jpg?v=1747307003"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <h3>Coffee Table Cosmo set</h3>
            {/* set Quantity */}
            <div className="flex flex-col gap-2">
              <label>set Quantity</label>
              <div className="flex gap-2.5">
                <div className=" flex">
                  <input
                    type="radio"
                    id="quick-view-set-of-2-set-quantity-1"
                    name="op"
                    value="2"
                    className=" hidden"
                    checked={selectedSetQuantity === "2"}
                    onChange={(e) => setSelectedSetQuantity(e.target.value)}
                  />
                  <label
                    htmlFor="quick-view-set-of-2-set-quantity-1"
                    className={`${
                      selectedSetQuantity === "2" ? "border-2 border-black" : ""
                    } border border-gray-500 rounded-full px-2.5 py-1 cursor-pointer`}
                  >
                    <span>set of 2</span>
                  </label>
                </div>

                <div className=" flex">
                  <input
                    type="radio"
                    id="quick-view-set-of-3-set-quantity-1"
                    name="op"
                    value="3"
                    className=" hidden"
                    checked={selectedSetQuantity === "3"}
                    onChange={(e) => setSelectedSetQuantity(e.target.value)}
                  />
                  <label
                    htmlFor="quick-view-set-of-3-set-quantity-1"
                    className={`${
                      selectedSetQuantity === "3" ? "border-2 border-black" : ""
                    } border border-gray-500 rounded-full px-2.5 py-1 cursor-pointer`}
                  >
                    <span>set of 3</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Style */}
            <div className="flex flex-col gap-2">
              <label>Style</label>
              <div className="flex gap-2.5">
                <div className=" flex">
                  <input
                    type="radio"
                    id="square"
                    name="op"
                    value="2"
                    className=" hidden"
                    checked={selectedStyle === "2"}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                  />
                  <label
                    htmlFor="square"
                    className={`${
                      selectedStyle === "2" ? "border-2 border-black" : ""
                    } border border-gray-500 rounded-full px-2.5 py-1 cursor-pointer`}
                  >
                    <span>square</span>
                  </label>
                </div>

                <div className=" flex">
                  <input
                    type="radio"
                    id="Rectangular"
                    name="op"
                    value="3"
                    className=" hidden"
                    checked={selectedStyle === "3"}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                  />
                  <label
                    htmlFor="Rectangular"
                    className={`${
                      selectedStyle === "3" ? "border-2 border-black" : ""
                    } border border-gray-500 rounded-full px-2.5 py-1 cursor-pointer`}
                  >
                    <span>Rectangular</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <label> Quantity</label>
            </div>
            {/* Price */}
            <div> 890,00</div>
            {/* Button */}
            <div>
              <ButtonLeft className="w-full">Add to cart</ButtonLeft>
              <ButtonLeft
                className="w-full bg-black mt-2.5!"
                animatColor="text-white"
              >
                <span className="text-white group-hover:text-black duration-500">
                  Buy it now
                </span>
              </ButtonLeft>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
