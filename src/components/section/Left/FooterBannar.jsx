import React from "react";

export default function FooterBannar() {
  return (
    <section className="p-5 md:p-10">
      <div className=" rounded-bl-[100px] md:rounded-bl-[150px] rounded-tr-[100px] md:rounded-tr-[150px] overflow-hidden relative">
        <div className=" absolute inset-0 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" object-cover w-full h-full"
          >
            <source
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/videos/c/vp/9848813b23eb462c8381e5cd0a5f852a/9848813b23eb462c8381e5cd0a5f852a.HD-1080p-3.3Mbps-49208504.mp4?v=0"
              type="video/mp4"
            />
          </video>
        </div>
        <div className=" absolute inset-0 bg-black/30"></div>
        <div className=" relative z-10 space-y-5 flex flex-col p-10 md:p-16">
          <div className="font-script text-3xl md:text-5xl">
            Featured Collection
          </div>
          <div className="text-3xl md:text-4xl"> Where Style Meets Comfort</div>
          <p>
            Discover handcrafted pieces that transform your living space into
            sanctuary.
          </p>

          <button className=" m-auto p-2.5 border rounded-full">
            <div className=" w-40 h-40 border rounded-full flex justify-center items-center">
              Explore
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
