import React from "react";

export default function RightBannar() {
  return (
    <>
      <section className="bg-white text-black h-screen flex flex-col gap-5">
        <div className="flex-1 p-16 flex flex-col justify-center gap-5">
          <div className="text-5xl font-semibold pt-10 uppercase">Desgin Dream Spaces</div>
          <p className="w-96 mx-auto">
            Design timeless spaces with sophisticated, beautifully made
            furniture that enhances every corner of your home.
          </p>
        </div>
        <div className="flex-1">
          <img src="/src/assets/right/right bannar.webp" alt="" />
        </div>
      </section>
    </>
  );
}
