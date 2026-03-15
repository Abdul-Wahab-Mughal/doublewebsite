import React from "react";
import AfterHeader from "../components/ui/AfterHeader";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import UnderlineButton from "../components/ui/underlineButton";

export default function KlantWorden() {
  return (
    <main className="bg-white min-h-screen text-black">
      <AfterHeader />
      <section className="pb-10">
        <img
          src="https://www.sligro.nl/klant-worden/_jcr_content/root/content/teaser.coreimg.85.1920.jpeg/1729255960928/20240228-platform-klantworden-klantenpas-1900x320-v1-2.jpeg"
          alt=""
          className="h-75 object-cover w-full z-10"
        />
        <div className=" max-w-187.5 m-auto p-5 space-y-5 md:-mt-30 md:pt-10 bg-white z-20 relative">
          <p>Welkom in de wereld van food</p>
          <h2 className="text-3xl">Klant worden bij Sligro</h2>
          <p className=" text-sm max-w-175 m-auto">
            pBij Sligro vind je een compleet food en non-food assortiment. Of je
            nu komt voor onze bijzondere koffiesoorten, verse vis, exclusieve
            wijn of een professionele keukenmachine. Je slaagt gegarandeerd.
          </p>
          <Link
            className="bg-(--btn) text-white px-3 py-1 cursor-pointer max-md:hidden flex items-center gap-2 hover:bg-(--btn)/75 w-fit m-auto mt-5"
            to="/klant-worden/klantenkaart-aanvragen"
          >
            Vraag gratis klantenkaart aan
          </Link>
        </div>
      </section>
      {/*  */}
      <section className=" p-5 mdp-10 relative">
        <div className=" z-0 h-62.5 md:pl-52">
          <img
            src="https://www.sligro.nl/klant-worden/_jcr_content/root/content/faq_container_copy/container/teaser_copy.coreimg.85.1920.jpeg/1757583154359/welkomstcadeau-krat-met-plank-liggend-lr.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" md:absolute md:top-1/2 md:-translate-y-1/2 flex flex-col z-10 bg-white max-w-125 py-5 md:p-5 h-fit space-y-5 md:text-start">
          <h4 className="text-xl">Kies jouw gratis welkomstcadeau</h4>
          <p>
            Word je klant bij Sligro, dan ontvang je een gratis welkomstcadeau.
            De waardebon ontvang je bij jouw nieuwe klantenkaart(en). Je kunt
            kiezen uit een borrelplank of vouwkrat.
          </p>
        </div>
      </section>
      {/*  */}
      <section className="p-5 md:p-10 text-start space-y-5">
        <h3 className="text-3xl">Veelgestelde vragen</h3>
        <details className=" shadow group">
          <summary className="p-5 text-base flex justify-between cursor-pointer font-bold">
            Hoe word ik klant bij Sligro?
            <ChevronDown className="group-open:rotate-180 min-w-10" />
          </summary>
          <div className="text-sm space-y-2.5 px-5 pb-5">
            <p>
              Alleen ondernemingen en organisaties die ingeschreven zijn bij de
              Kamer van Koophandel kunnen in het bezit komen van een
              Sligro-klantenkaart. Deze klantenkaart kun je binnen 5 minuten
              aanvragen via dit formulier. Houd hiervoor je KvK-nummer bij de
              hand.
            </p>
            <p>
              Het is ook mogelijk om een klantenkaart aan te vragen in jouw
              dichtstbijzijnde Sligro-vestiging. Neem hiervoor een geldig
              legitimatiebewijs en een recent uittreksel van de Kamer van
              Koophandel mee. Deze mag maximaal 1 jaar oud zijn.
            </p>
            <p>
              Heb je interesse om bezorgklant te worden bij Sligro? Vul dan dit
              formulier in. We nemen dan zo spoedig mogelijk contact met je op
              om de mogelijkheden te bespreken. Je krijgt je producten bij
              bezorging afgeleverd op het afgesproken bezorgadres. We hanteren
              hiervoor een minimale orderwaarde van €500,00 op basis van
              periodieke levering.
            </p>
          </div>
        </details>
        <details className=" shadow group">
          <summary className="p-5 text-base flex justify-between cursor-pointer font-bold">
            Kan ik ook klant worden als mijn bedrijf in het buitenland is
            gevestigd?
            <ChevronDown className="group-open:rotate-180 min-w-10" />
          </summary>
          <div className="text-sm space-y-2.5 px-5 pb-5">
            <p>
              Ja, ook ondernemers met een vestiging in het buitenland kunnen een
              Sligro-klantenkaart aanvragen in een van onze Sligro-vestigingen.
              Daarvoor heb je het volgende nodig:
            </p>
            <ul className="pl-5">
              <li>Een geldig legitimatiebewijs.</li>
              <li>
                Bewijs van bestaan: een document dat door een officiële
                instantie of een onafhankelijke organisatie is verstrekt (bijv.
                kopie van statuten of oprichtingsakte)
              </li>
              <li>
                Een kopie/uittreksel van uw registratie/inschrijving bij de
                betreffende btw-administratie
              </li>
              <li>
                De bijbehorende Sligro-klantenkaart(en) worden enkel per post
                gestuurd naar Nederland, België, Luxemburg en Duitsland.
                Sligro-klantenkaarten voor de overige landen versturen we naar
                de Sligro-vestiging waar de aanvraag is ingediend.
              </li>
            </ul>
            <p>
              Voor de aanvraag van Sligro-ISPC België klantenkaart(en). Klik dan{" "}
              <UnderlineButton>hier.</UnderlineButton>
            </p>
          </div>
        </details>
        <details className=" shadow group">
          <summary className="p-5 text-base flex justify-between cursor-pointer font-bold">
            Hoe vraag ik een klantenkaart aan voor mijn tweede bedrijf?
            <ChevronDown className="group-open:rotate-180 min-w-10" />
          </summary>
          <div className="text-sm space-y-2.5 px-5 pb-5">
            <p>
              Ben je al klant maar start je een tweede bedrijf en wil je
              hiervoor ook een Sligro-klantenkaart aanvragen? Dat kan zowel
              online als bij de klantenreceptie in een Sligro-vestiging. Voor
              het aanvragen van een klantenkaart in een Sligro vestiging heb je
              een geldig legitimatiebewijs en een recent uittreksel van de Kamer
              van Koophandel nodig. Het uittreksel mag maximaal 1 jaar oud zijn.
            </p>
            <p>
              Tweede klantenkaart aanvragen? Ga direct naar{" "}
              <UnderlineButton>Sligro-klantenkaart aanvragen..</UnderlineButton>
            </p>
          </div>
        </details>
        <details className=" shadow group">
          <summary className="p-5 text-base flex justify-between cursor-pointer font-bold">
            Kan ik bezorgklant worden bij Sligro?
            <ChevronDown className="group-open:rotate-180 min-w-10" />
          </summary>
          <div className="text-sm space-y-2.5 px-5 pb-5">
            <p>
              Heb je interesse om bezorgklant te worden bij Sligro? Vul dan ons{" "}
              <UnderlineButton>formulier</UnderlineButton> in. We nemen graag zo
              spoedig mogelijk contact met je op om alle mogelijkheden te
              bespreken.
            </p>
            <p>
              Bezorging is afhankelijk van ordergrootte en gebeurt op basis van
              individuele wensen. We werken hierbij met een minimale orderwaarde
              van €500,00 op basis van periodieke levering. We maken duidelijke
              afspraken met het oog op de bestelwijze, het bestelmoment en de
              leverfrequentie.
            </p>
          </div>
        </details>
        {/*  */}
        <div className=" text-end">
          <UnderlineButton>Alle veelgestelde vragen</UnderlineButton>
        </div>
      </section>
    </main>
  );
}
