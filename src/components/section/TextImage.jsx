import React from "react";

export default function TextImage() {
  return (
    <>
      <section className="bg-white flex max-lg:flex-wrap p-5 lg:p-16 gap-5">
        <div className="w-full lg:w-[40%] text-black text-start flex flex-col gap-3 lg:pr-20 lg:pt-7">
          <div className="text-2xl">Made by Deco</div>
          <div className="font-bold text-3xl">In-House</div>
          <p className="lg:text-xs">
            Crafted in our own workshops using reclaimed teak and durable metal.
            Honest materials, timeless style — built to last.
          </p>
        </div>
        <div className="w-full lg:w-[60%] flex gap-5">
          <div className="lg:flex-4 flex items-end w-full">
            <img
              src="/src/assets/four_card_1.webp"
              alt=""
              className="w-full rounded-bl-[50px] rounded-tr-[50px] aspect-square"
            />
          </div>
          <div className="lg:flex-5 w-full">
            <img
              src="/src/assets/four_card_1.webp"
              alt=""
              className="w-full aspect-square"
            />
          </div>
        </div>
      </section>
    </>
  );
}
