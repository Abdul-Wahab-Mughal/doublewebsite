import React from "react";

export default function TwoImage() {
  return (
    <section className=" flex max-md:flex-col lg:py-10 overflow-hidden">
      <div className="w-[62.5%] h-96 relative group overflow-hidden cursor-pointer">
        <img
          src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/bookcase-cosmo-3d-3or-fix-4_1a0c3c68-420f-40e4-b769-817c65fbbf78_1200x.jpg?v=1748866654"
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
        />
        <div className=" absolute inset-0 bg-black/25"></div>
        <div className=" absolute inset-0 flex  flex-col justify-center items-center">
          <div className=" capitalize">Premium Furniture</div>
          <div className=" uppercase text-3xl">Explore our world</div>
        </div>
      </div>
      <div className="w-[37.5%] h-96 relative group overflow-hidden cursor-pointer">
        <img
          src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_11_dining-table-curves-black-plus-chair-trapezium-sfeer-2_720x.jpg?v=1749029713"
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
        />
        <div className=" absolute inset-0 bg-black/25"></div>

        <div className=" absolute inset-0 flex  flex-col justify-center items-center">
          <div className=" capitalize">Modern Design</div>
          <div className=" uppercase text-3xl">Two world of style</div>
        </div>
      </div>
    </section>
  );
}
