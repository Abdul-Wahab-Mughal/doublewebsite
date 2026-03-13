import React from "react";
import AfterHeader from "../components/ui/AfterHeader";

export default function Inkooplijst() {
  return (
    <main className="bg-white min-h-screen">
      <AfterHeader />
      <div className="px-10 py-10">
        <div className="text-black h-full min-h-62.5 text-start px-20 space-y-2.5">
          <h2 className="text-5xl font-extralight">Inkooplijst</h2>
          <p>
            Ben je klant van onze bezorgservice en wil je bestellen? Klik dan op
            inloggen.
          </p>
          <p className="w-150">
            Ben je klant van onze vestigingen? Stel hier je inkooplijst samen.
            Inkopen doen in de vestiging(*) wordt dan nog eenvoudiger.
          </p>
          <p>
            (*) Het assortiment per vestiging kan afwijken van het getoonde
            assortiment.
          </p>
          <input
            type="text"
            placeholder="Prouduct toevoegen aan lijst"
            className=" p-2.5 w-full"
            style={{ boxShadow: "0 0 10px 0 gray" }}
          />
        </div>
      </div>
    </main>
  );
}
