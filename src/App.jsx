import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";
// import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
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
