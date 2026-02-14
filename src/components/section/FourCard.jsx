import { Eye } from "lucide-react";
import React from "react";
import card from "../../assets/four_card_1.webp";

export default function FourCard() {
  return (
    <>
      <section className=" flex max-lg:flex-wrap bg-white p-5 lg:p-16">
        <div className="w-1/2 lg:flex-1 flex items-end p-5">
          <div className="text-start flex flex-col gap-3">
            <div className="lg:pb-[150%] relative rounded-full overflow-hidden group">
              <img src={card} alt="" className=" lg:absolute h-full" />
              <div className=" absolute top-0 right-0 z-10 w-full h-full bg-black/30 group-hover:flex! justify-center items-center hidden cursor-pointer">
                <Eye size={30} />
              </div>
            </div>
            <div className="text-black font-bold text-2xl lg:text-base leading-none">
              Bistro Side Table
            </div>
            <p className="text-black lg:text-xs">
              Solid teak top with dark inlay. Food-safe finish. Metal base.
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:flex-3 p-5">
          <div className="text-start flex flex-col gap-3">
            <div className=" relative rounded-bl-[125px] rounded-tr-[125px] overflow-hidden group">
              <img src={card} alt="" className="w-full" />
              <div className=" absolute top-0 right-0 z-10 w-full h-full bg-black/30 group-hover:flex! justify-center items-center hidden cursor-pointer">
                <Eye size={30} />
              </div>
            </div>
            <div className="text-black font-bold text-2xl lg:text-base leading-none">
              Metropole Coffee Table
            </div>
            <p className="text-black lg:text-xs">
              Reclaimed teak and black metal. Boomerang-style legs.
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:flex-2 flex items-center p-5">
          <div className="text-start flex flex-col gap-3">
            <div className=" relative rounded-bl-[125px] rounded-tr-[125px] overflow-hidden lg:rounded-none group">
              <img src={card} alt="" className=" lg:aspect-square" />
              <div className=" absolute top-0 right-0 z-10 w-full h-full bg-black/30 group-hover:flex! justify-center items-center hidden cursor-pointer">
                <Eye size={30} />
              </div>
            </div>
            <div className="text-black font-bold text-2xl lg:text-base leading-none">
              Atlas Round Table
            </div>
            <p className="text-black lg:text-xs">
              Round teak top. Natural wood grain. Modern metal base.
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:flex-1 p-5">
          <div className="text-start flex flex-col gap-3">
            <div className="lg:pb-[150%] relative  rounded-full group overflow-hidden">
              <img src={card} alt="" className="lg:absolute h-full" />
              <div className=" absolute top-0 right-0 z-10 w-full h-full bg-black/30 group-hover:flex! justify-center items-center hidden cursor-pointer">
                <Eye size={30} />
              </div>
            </div>
            <div className="text-black font-bold text-2xl lg:text-base leading-none">
              Cosmo Table Set
            </div>
            <p className="text-black lg:text-xs">
              Set of two. Reclaimed teak tops. Slim black frames.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
