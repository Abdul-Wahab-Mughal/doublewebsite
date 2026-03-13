import React from "react";
import img from "../assets/eig_banner.jpg";
import Button from "../components/ui/Button";
import UnderlineButton from "../components/ui/underlineButton";
import AfterHeader from "../components/ui/AfterHeader";
import { Link } from "react-router-dom";

export default function LeftContact() {
  return (
    <main className="bg-white min-h-screen">
      <AfterHeader />

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
              Sligro-vestiging? Krijg met de klantenkaart vandaag nog exclusief
              toegang tot al onze vestigingen.
            </p>
            <ul className="pl-5">
              <li>Grote verpakkingen, kleine prijzen</li>
              <li>Breed assortiment A-merken en eigen merken</li>
              <li>Altijd dichtbij en makkelijk bereikbaar</li>
              <li>Persoonlijk advies van échte vakmensen</li>
            </ul>

            <Link
              className="bg-(--btn) text-white px-10 py-2 cursor-pointer max-md:hidden flex items-center gap-2 hover:bg-(--btn)/75 w-fit"
              to="/klant-worden"
            >
              Klant Worden
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
