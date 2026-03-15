import React from "react";
import AfterHeader from "../components/ui/AfterHeader";
import UnderlineButton from "../components/ui/underlineButton";

export default function KlantenkaartAanvragen() {
  return (
    <main className="bg-white min-h-screen text-black">
      <AfterHeader />
      <section className="bg-gray-100 pb-5">
        <img
          src="https://www.sligro.nl/klant-worden/klantenkaart/_jcr_content/root/content/teaser.coreimg.85.1920.jpeg/1721295400566/sligro-klantenpas.jpeg"
          alt=""
          className="h-40 md:h-75 object-cover w-full z-10"
        />
        <div className=" max-w-187.5 p-5 space-y-5 md:-mt-30 md:pt-20 pb-10 bg-white z-20 relative text-start">
          <h2 className="text-3xl">Klantenkaart aanvragen</h2>
          <p className=" text-sm max-w-175 m-auto">
            Vul onderstaand formulier in om je Sligro-klantenkaart aan te
            vragen.
          </p>
        </div>
      </section>
      {/*  */}
      <section className="p-5 md:p-10 pt-5 bg-gray-100 text-start space-y-5">
        {/* 1 */}
        <div className=" shadow p-5 bg-white space-y-2.5">
          <div className=" uppercase text-xl">1. Organisatiegegevens</div>
          <div className=" w-full h-px bg-gray-200"></div>
          <div className="space-y-5">
            <p className="text-sm max-w-187.5">
              Om klant te worden bij Sligro dient u geregistreerd te zijn bij de
              Kamer van Koophandel. We gebruiken uw KVK-nummer om de
              organisatiegegevens op te halen voor dit aanmeldproces. Deze
              kunnen daarom niet aangepast worden.
            </p>
            <div>
              <h4 className=" uppercase">KVK-gegevens</h4>
              <div className="bg-gray-100 p-5 flex flex-col gap-2.5">
                <label htmlFor="KVK-nummer" className="font-semibold">
                  KVK-nummer
                </label>
                <div>
                  <input
                    type="text"
                    name="KVK-nummer"
                    className="bg-white w-fit h-10 mr-5"
                  />
                  <UnderlineButton>
                    Ik weet mijn KVK-nummer niet
                  </UnderlineButton>
                </div>
              </div>
            </div>
            <div>
              <h4 className=" uppercase">Organisatiegegevens</h4>
              <div className="bg-gray-100 p-5 flex flex-col gap-2.5">
                <p className="text-sm max-w-187.5">
                  Het organisatieadres is het adres waarop u de
                  Sligro-klantenkaart(en) ontvangt. Voor onze folder of andere
                  correspondentie kunt u in stap 3 van dit formulier desgewenst
                  een afwijkend adres of een postbus opgeven.
                </p>
                <label htmlFor="Branche" className="font-semibold">
                  Branche
                </label>
                <select id="Branche" name="SEGMENT" className="w-fit bg-white h-10">
                  <option></option>
                  <option value="1">Restaurants</option>
                  <option value="2">Logies</option>
                  <option value="3">Catering</option>
                  <option value="5">Petrol</option>
                  <option value="6">Dagrecreatie en Sport</option>
                  <option value="7">Fastservice</option>
                  <option value="8">Detailhandel</option>
                  <option value="9">Bedrijf / vereniging / stichting </option>
                </select>

                <label htmlFor="Telefoon" className="font-semibold">
                  Telefoon
                </label>
                <input
                  type="text"
                  name="Telefoon"
                  className="bg-white w-fit h-10 mr-5"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" shadow p-5 bg-white space-y-2.5">
          <div className=" uppercase text-xl">2. Klantenkaarthouder</div>
          <div className=" w-full h-px bg-gray-200"></div>
        </div>
        {/* 3 */}
        <div className=" shadow p-5 bg-white space-y-2.5">
          <div className=" uppercase text-xl">3. Correspondentie</div>
          <div className=" w-full h-px bg-gray-200"></div>
        </div>
        {/* 4 */}
        <div className=" shadow p-5 bg-white space-y-2.5">
          <div className=" uppercase text-xl">4. Controle</div>
          <div className=" w-full h-px bg-gray-200"></div>
        </div>
      </section>
    </main>
  );
}
