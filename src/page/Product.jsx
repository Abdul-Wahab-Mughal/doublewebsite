import { BadgePercent, Circle, Heart, ShoppingCartIcon, X } from "lucide-react";
import React from "react";

const collectionsData = [
  {
    image:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1.png?v=1747252471&width=533",
    hoverimage:
      "https://mart-harmonia.myshopify.com/cdn/shop/files/barstool2color1hover.png?v=1747252471&width=940",
    label: "Upholstered Modern Bar Stool",
    price: "€190.00",
    pricecompare: "€299.00",
    colors: ["red", "orange", "black"],
  },
];
export default function Product() {
  return (
    <main className=" bg-white text-black pt-30 min-h-screen">
      <section className="p-5 md:p-10 grid md:grid-cols-2 gap-5 text-start">
        {/* left */}
        <div>
          <div>
            <img
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/H4RBRCBN-1_1482x.jpg?v=1747308543"
              alt=""
            />
          </div>
          <div className=" grid grid-cols-4 gap-2.5">
            <img
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/H4RBRCBN-1_1482x.jpg?v=1747308543"
              alt=""
              className=" border rounded-2xl"
            />
            <img
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/H4RBRCBN-1_1482x.jpg?v=1747308543"
              alt=""
              className=" border rounded-2xl"
            />
          </div>
        </div>
        {/* Right */}
        <div className="space-y-2.5">
          <h2 className=" text-3xl uppercase">Mini vacuum cleaner</h2>
          <p className=" underline">InnovaGoods</p>
          <div className=" uppercase grid grid-cols-2">
            <p>2-Year Guatantee</p>
            <p>Delivery Tracking</p>
          </div>
          <div className=" grid grid-cols-3 gap-x-10 gap-y-5">
            <div className="flex flex-col gap-2.5">
              <span>Weight</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Ref.</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Pallet</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Box</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Mesasures</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>EAN</span>
              <div className=" rounded-full bg-gray-200 h-2"></div>
            </div>
          </div>
          <div className="flex gap-2.5">
            <BadgePercent /> Special price for large quantites
          </div>
          {/* Special Price */}
          <div>
            <div className=" border-b px-5 py-1 flex justify-between">
              <span>Units</span>
              <span>Special Price</span>
            </div>
            <div className="px-5 py-1 flex justify-between">
              <span>+10</span>
              <span className="text-red-500">-3%</span>
            </div>
            <div className="px-5 py-1 flex justify-between">
              <span>+20</span>
              <span className="text-red-500">-6%</span>
            </div>
            <div className="px-5 py-1 flex justify-between">
              <span>+400</span>
              <span className="text-red-500">-15%</span>
            </div>
          </div>
          {/* Price */}
          <div className="bg-amber-200 grid grid-cols-4 rounded-2xl overflow-hidden">
            <div className=" grid grid-cols-2 gap-2.5 col-span-3 px-5 py-2.5 items-center">
              <span>RRP</span>
              <span className=" text-end text-4xl font-bold text-gray-800">
                20.58
              </span>
              <span>in shops</span>
              <span className=" text-end text-2xl">40.99</span>
            </div>
            <div className="bg-gray-800 flex justify-center items-center text-white text-2xl">
              -59%
            </div>
          </div>
          {/* quantity */}
          <span>Units</span>
          <div className="flex gap-5">
            <input
              type="text"
              name=""
              id=""
              className="w-fit max-w-24 text-end"
              placeholder="1"
            />
            <span className="flex items-center gap-2.5">
              <Circle color="green" fill="green" size={10} /> Available
            </span>
          </div>
          {/* Button */}
          <div className="flex gap-5">
            <button className="flex items-center justify-center gap-2.5 bg-green-400 py-2.5 w-full rounded-lg cursor-pointer">
              <ShoppingCartIcon fill="bg-gray-700" /> Add to cart
            </button>
            <div className=" flex justify-center items-center border rounded-lg p-5">
              <Heart size={20} />
            </div>
          </div>
          {/* Description */}
          <div className="py-2.5 border-y border-gray-200">
            <div className=" uppercase underline">Description</div>
            {/* open Description */}
            <div
              className=" group bg-amber-100"
              // open
            >
              <div
                className={`fixed top-0 right-0 z-500 bg-black/25 w-full h-full hidden group-open:block`}
              >
                <div className=" bg-white max-w-138.75 relative overflow-hidden max-h-screen flex flex-col ml-auto translate-x-full group-open:translate-x-0 duration-500">
                  <div className=" relative px-10 py-5">
                    <h2 className=" text-3xl">Description</h2>
                    <button className=" absolute top-5 right-5">
                      <X />
                    </button>
                  </div>

                  <div className="px-10 pb-5 overflow-auto flex-1 space-y-5">
                    <p>
                      A stunning blend of rustic charm and modern design, the
                      Blue Round Charcuterie Board with natural wooden slats is
                      a versatile and stylish addition to your kitchen or dining
                      space. Handcrafted from reclaimed wood, this board
                      features a vibrant blue finish accented by two natural
                      wooden slats, creating a striking contrast that highlights
                      its artisanal craftsmanship. Its generously sized round
                      surface is perfect for serving an assortment of cheeses,
                      bread, fruits, or charcuterie, making it ideal for
                      entertaining or everyday use.
                    </p>
                    <p>
                      The natural texture and unique imperfections of the
                      reclaimed wood—such as knots and crevices—ensure that each
                      piece is truly one of a kind. A sturdy handle with an
                      attached rope allows for easy hanging and display when not
                      in use, adding a decorative touch to your kitchen or
                      dining area.
                    </p>
                    <p>
                      <strong>Weight:</strong> 2 kg
                    </p>
                    <h3 className="text-2xl">Care Instructions:</h3>
                    <ul className="space-y-2.5">
                      <li className=" list-disc list-inside">
                        Wipe clean with warm soapy water immediately after use
                        and dry thoroughly with a clean towel.
                      </li>
                      <li className=" list-disc list-inside">
                        Avoid soaking the board in water or using abrasive
                        cleaning products.
                      </li>
                      <li className=" list-disc list-inside">
                        Brightly colored foods like berries, turmeric, and
                        mustard may stain the surface. For tougher stains, refer
                        to eco-friendly cleaning solutions available on our
                        website.
                      </li>
                      <li className=" list-disc list-inside">
                        Treat occasionally with food-safe oil or wax to maintain
                        its vibrant finish and durability.
                      </li>
                    </ul>
                    <p>
                      Designed exclusively for serving and decorative purposes,
                      this board is not suitable for cutting or chopping. To
                      protect its surface, use parchment paper, plates, or bowls
                      as a barrier for wet or hot ingredients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </main>
  );
}
