import React from "react";

export default function SaleBadge({ price, compare }) {
  const getDiscount = (price, compare) => {
    const current = parseFloat(price.replace("€", ""));
    const original = parseFloat(compare.replace("€", ""));
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className=" absolute inset-0 left-2.5 top-2.5 hidden">
      <div className=" text-start bg-red-700 w-fit text-xs py-0.5 px-2 rounded-full uppercase text-white">
        {getDiscount(price, compare)}% sale
      </div>
    </div>
  );
}
