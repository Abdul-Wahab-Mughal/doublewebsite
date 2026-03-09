import { Check, Search } from "lucide-react";
import React from "react";
import img from "../assets/eig_banner.jpg";
import Button from "../components/ui/Button";

export default function LeftContact() {
  return (
    <main className="bg-white">
      <div className=" w-full h-26"></div>
      <div className="flex justify-between px-10 py-2.5 text-black">
        <div></div>
        <div className="flex gap-5">
          <span className="text-sm cursor-pointer">Slimme oplossingen</span>
          <span className="text-sm cursor-pointer">Inspiratie</span>
          <span className="text-sm cursor-pointer">Klantenservice</span>
          <span className="text-sm cursor-pointer">Sligro vestigingen</span>
          <span className="text-sm cursor-pointer">Folders & acties</span>
          <span className="text-sm cursor-pointer">Aanbiedingen</span>
        </div>
      </div>
      <div className="h-screen text-black">
        {/* Serach */}
        <div className="flex justify-between gap-5 px-10">
          <button className="bg-(--btn) text-white px-3 py-2 cursor-pointer">
            Assortiment
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
          <button className="bg-(--btn) text-white px-3 py-2 cursor-pointer">
            Inkooplijst
          </button>
        </div>
        {/* After serach */}
        <div className="flex justify-between px-10 py-2.5">
          <div className="flex gap-5">
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
          <div>
            <span>Klant worden</span>
          </div>
        </div>
        {/* Login */}
        <div className="max-h-[80%] h-full relative flex justify-center items-center">
          <img
            src={img}
            alt=""
            className=" absolute inset-0 h-full w-full object-cover object-left z-10"
          />
          <div className="bg-white w-4/5 h-4/5 flex text-left z-20">
            <div className="w-1/2 p-10 flex flex-col gap-5">
              <div>Inloggon</div>
              <p>
                Let op: Ben jij klant in onze zelfbedieningsvestigingen, dan kun
                je op sligro.nl producten verkennen, ideeën opdoen en je laten
                inspireren. Inloggen is alleen mogelijk als jij hierover
                communicatie van Sligro hebt ontvangen.
              </p>
            </div>
            <div className="w-1/2 bg-gray-100 p-10 flex flex-col gap-5">
              <div>Onbezorged ondernemen Word nu Sligro Klant</div>
              <p>
                Als ondernemer of instelling inkopen doen bij een
                Sligro-vestiging? Krijg met de klantenkaart vandaag nog
                exclusief toegang tot al onze vestigingen.
              </p>
              <ul className="pl-5">
                <li>Grote verpakkingen, kleine prijzen</li>
                <li>Breed assortiment A-merken en eigen merken</li>
                <li>Altijd dichtbij en makkelijk bereikbaar</li>
                <li>Persoonlijk advies van échte vakmensen</li>
              </ul>

              <Button>Klant Worden</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
