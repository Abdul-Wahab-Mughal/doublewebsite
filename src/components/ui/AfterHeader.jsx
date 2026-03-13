import { Check, ChevronRight, ClipboardList, Search, X } from "lucide-react";
import React, { useState } from "react";
import UnderlineButton from "./underlineButton";
import { Link } from "react-router-dom";

export default function AfterHeader() {
  const [openAssortiment, setOpenAssortiment] = useState(false);

  return (
    <>
      <div className=" w-full h-26"></div>
      <div className="flex justify-between px-10 py-2.5 text-black">
        <div></div>
        <div className="flex gap-5 flex-wrap">
          {/* <span className="text-sm cursor-pointer">Slimme oplossingen</span> */}
          {/* <span className="text-sm cursor-pointer">Inspiratie</span> */}
          <span className="text-sm cursor-pointer">Klantenservice</span>
          {/* <span className="text-sm cursor-pointer">Sligro vestigingen</span> */}
          {/* <span className="text-sm cursor-pointer">Folders &  acties</span> */}
          <span className="text-sm cursor-pointer">Aanbiedingen</span>
        </div>
      </div>
      <div className=" text-black">
        {/* Serach */}
        <div className="flex justify-between items-center gap-5 px-5 md:px-10">
          <button
            className=" flex items-center gap-2.5 bg-(--btn) text-white px-3 py-1 cursor-pointer max-md:hidden hover:bg-(--btn)/75 relative"
            onClick={() => setOpenAssortiment(!openAssortiment)}
          >
            Assortiment
            {openAssortiment ? <X /> : <ChevronRight className=" rotate-90" />}
            {openAssortiment && (
              <div className="openassortiment absolute top-full bg-white text-black p-5 z-100 shadow space-y-2">
                <div className="flex gap-2.5 justify-between items-center text-nowrap uppercase">
                  vlees, wild & gevogelte <ChevronRight size={20} />
                </div>
                <div className="flex gap-2.5 justify-between items-center text-nowrap uppercase">
                  vis <ChevronRight size={20} />
                </div>
                <div className="flex gap-2.5 justify-between items-center text-nowrap uppercase">
                  aardappelen, groenten & fruit
                  <ChevronRight size={20} />
                </div>
                <div className="flex gap-2.5 justify-between items-center text-nowrap uppercase">
                  Kaas, zuivel & vleeswaren
                  <ChevronRight size={20} />
                </div>
              </div>
            )}
          </button>
          <div className="w-full h-full flex items-center bg-gray-200">
            <input
              type="text"
              placeholder="Zoeken naar producten of informatie "
              name="serach"
              className="w-full bg-white px-3 py-2.5 border border-gray-400"
            />
            <div className="py-2.5 border px-5 border-gray-400">
              <Search />
            </div>
          </div>
          <Link
            className="bg-(--btn) text-white px-3 py-1 cursor-pointer max-md:hidden flex items-center gap-2 hover:bg-(--btn)/75"
            to="/inkooplijst"
          >
            <ClipboardList size={20} />
            Inkooplijst
          </Link>
        </div>
        {/* After serach */}
        <div className="flex justify-between px-10 py-2.5 flex-wrap">
          <div className="flex gap-5 max-md:hidden">
            <span className="flex items-center gap-1.5 text-sm cursor-pointer">
              <Check size={15} color="green" /> Ruim assortiment en aanbiedingen
            </span>
            <span className="flex items-center gap-1.5 text-sm cursor-pointer">
              <Check size={15} color="green" /> Volop inspiratie en oplossingen
            </span>
            <span className="flex items-center gap-1.5 text-sm cursor-pointer">
              <Check size={15} color="green" /> Altijd een vestiging in de buurt
            </span>
          </div>
          <div className="flex gap-2.5 justify-end">
            <UnderlineButton>Klant worden</UnderlineButton>
            <UnderlineButton
            // onClick={openlogin}
            to="/contact"
            >
              Inloggen
            </UnderlineButton>
          </div>
        </div>
      </div>
    </>
  );
}
