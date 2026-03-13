import {
  Check,
  ChevronRight,
  ClipboardList,
  Flag,
  Search,
  X,
} from "lucide-react";
import React, { useState } from "react";
import img from "../assets/eig_banner.jpg";
import Button from "../components/ui/Button";
import UnderlineButton from "../components/ui/underlineButton";

export default function LeftContact() {
  const [openAssortiment, setOpenAssortiment] = useState(false);
  const [loginpage, setloginpage] = useState(true);
  const [inkooplijst, setinkooplijst] = useState(false);
  const [klantWorden, setklantWorden] = useState(false);

  const openlogin = () => {
    setloginpage(true);
    setinkooplijst(false);
    setklantWorden(false);
  };

  const openinkoop = () => {
    setloginpage(false);
    setinkooplijst(true);
    setklantWorden(false);
  };
  const opensetklantWorden = () => {
    console.log("Asd");
    setloginpage(false);
    setinkooplijst(false);
    setklantWorden(true);
  };
  return (
    <main className="bg-white min-h-screen">
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
          <button
            className="bg-(--btn) text-white px-3 py-1 cursor-pointer max-md:hidden flex items-center gap-2 hover:bg-(--btn)/75"
            onClick={openinkoop}
          >
            <ClipboardList size={20} />
            Inkooplijst
          </button>
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
          <div className="flex gap-2.5 justify-end w-full">
            <UnderlineButton>Klant worden</UnderlineButton>
            <UnderlineButton onClick={openlogin}>Inloggen</UnderlineButton>
          </div>
        </div>
      </div>
      {/* Login page */}
      {loginpage && (
        <div className=" h-full relative flex justify-center items-center py-20 text-black">
          <img
            src={img}
            alt=""
            className=" absolute inset-0 h-full w-full object-cover object-left z-10"
          />
          <div className="bg-white w-4/5 h-4/5 flex flex-col md:flex-row text-left z-20">
            <div className="md:w-1/2 p-5 md:p-10 flex flex-col gap-5">
              <div className="text-3xl">Inloggon</div>
              <p className=" text-sm">
                Let op: Ben jij klant in onze zelfbedieningsvestigingen, dan kun
                je op sligro.nl producten verkennen, ideeën opdoen en je laten
                inspireren. Inloggen is alleen mogelijk als jij hierover
                communicatie van Sligro hebt ontvangen.
              </p>
              <form className="flex flex-col gap-5 w-fit">
                <input
                  type="email"
                  placeholder="E-mailadres"
                  className=" border p-2.5"
                  required
                />
                <input
                  type="password"
                  placeholder="Wachtwoord"
                  className=" border p-2.5"
                  required
                />
                <div className="flex gap-2.5">
                  <input type="checkbox" name="onth" id="onth" required />
                  <label htmlFor="onth">
                    Onthoud mij.
                    <UnderlineButton> Lees hier </UnderlineButton>
                    hoe dit werkt
                  </label>
                </div>
                <div className="flex gap-5 items-center">
                  <Button className="mt-0! uppercase" type="submit">
                    Log in
                  </Button>
                  <UnderlineButton>Wachtwoord vergeten?</UnderlineButton>
                </div>
                <div className=" flex gap-2.5 items-center">
                  <p>Nog geen account?</p>
                  <UnderlineButton>Registeren?</UnderlineButton>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-5 md:p-10 flex flex-col gap-5">
              <div>Onbezorged ondernemen Word nu Sligro Klant</div>
              <p className="text-sm">
                Als ondernemer of instelling inkopen doen bij een
                Sligro-vestiging? Krijg met de klantenkaart vandaag nog
                exclusief toegang tot al onze vestigingen.
              </p>
              <ul className="pl-5 text-sm">
                <li>Grote verpakkingen, kleine prijzen</li>
                <li>Breed assortiment A-merken en eigen merken</li>
                <li>Altijd dichtbij en makkelijk bereikbaar</li>
                <li>Persoonlijk advies van échte vakmensen</li>
              </ul>

              <Button onClick={opensetklantWorden}>Klant Worden</Button>
            </div>
          </div>
        </div>
      )}
      {/* Inkooplijst */}
      {inkooplijst && (
        <div className="px-10 py-10">
          <div className="text-black h-full min-h-62.5 text-start px-20 space-y-2.5">
            <h2 className="text-5xl font-extralight">Inkooplijst</h2>
            <p>
              Ben je klant van onze bezorgservice en wil je bestellen? Klik dan
              op inloggen.
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
      )}
      {/* Klant Worden */}
      {klantWorden && (
        <>
          <div className="text-black">opensetklantWorden</div>
        </>
      )}
    </main>
  );
}
