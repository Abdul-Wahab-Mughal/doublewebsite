import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

import Header from "./components/Header";
import ScrollToTop from "./components/ui/ScrollToTop";

import Home from "./page/Home";
import Product from "./page/Product";
import NotFound from "./page/NotFound";
import HomeRight from "./page/HomeRight";
import LeftContact from "./page/LeftContact";
import Inkooplijst from "./page/Inkooplijst";
import KlantWorden from "./page/KlantWorden";
import CollectionLeft from "./page/CollectionLeft";
import CollectionRight from "./page/CollectionRight";
import KlantenkaartAanvragen from "./page/KlantenkaartAanvragen";

function App() {
  const [home, setHome] = useState(true);

  return (
    <>
      <Router>
        <ScrollToTop />
        {/* Header */}
        <Header home={home} setHome={setHome} />
        <Routes>
          <Route path="/" element={home ? <Home /> : <HomeRight />} />
          <Route path="/contact" element={<LeftContact />} />
          <Route path="/inkooplijst" element={<Inkooplijst />} />

          <Route path="/klant-worden" element={<KlantWorden />} />
          <Route
            path="/klant-worden/klantenkaart-aanvragen"
            element={<KlantenkaartAanvragen />}
          />

          {/* Yape's */}
          <Route path="/y/collection" element={<CollectionLeft />} />
          <Route path="/y/product" element={<Product />} />

          {/* zita's */}
          <Route path="/z/collection" element={<CollectionRight />} />

          {/* <Route path="/h" element={<RightHome />} /> */}
          {/*  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer navLinks={navLinks} /> */}
      </Router>
    </>
  );
}

export default App;
