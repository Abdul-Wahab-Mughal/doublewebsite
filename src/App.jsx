import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
import LeftContact from "./page/LeftContact";
import RightHome from "./page/RightHome";
import Inkooplijst from "./page/Inkooplijst";
import KlantWorden from "./page/KlantWorden";
import KlantenkaartAanvragen from "./page/KlantenkaartAanvragen";
// import NotFound from "./page/NotFound";

function App() {
  const [home, setHome] = useState(true);

  return (
    <>
      <Router>
        {/* Header */}
        <Header home={home} setHome={setHome} />
        <Routes>
          <Route path="/" element={home ? <Home /> : <RightHome />} />
          <Route path="/contact" element={<LeftContact />} />
          <Route path="/inkooplijst" element={<Inkooplijst />} />

          <Route path="/klant-worden" element={<KlantWorden />} />
          <Route path="/klant-worden/klantenkaart-aanvragen" element={<KlantenkaartAanvragen />} />

          {/* <Route path="/h" element={<RightHome />} /> */}
          {/*  */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer navLinks={navLinks} /> */}
      </Router>
    </>
  );
}

export default App;
