import React from "react";
import bannar from "../../assets/right/right bannar.webp";

export default function RightBannar() {
  return (
    <>
      <section className="bg-white text-black h-screen flex flex-col">
        <div className=" h-1/2 p-4 md:p-16 flex flex-col justify-center gap-5">
          <div className="text-5xl font-semibold pt-10 uppercase">
            Desgin Dream Spaces
          </div>
          <p className="w-96 mx-auto">
            Design timeless spaces with sophisticated, beautifully made
            furniture that enhances every corner of your home.
          </p>
        </div>
        <div className=" h-1/2">
          <img src={bannar} alt="" className="h-full w-full object-cover" />
        </div>
      </section>
    </>
  );
}
