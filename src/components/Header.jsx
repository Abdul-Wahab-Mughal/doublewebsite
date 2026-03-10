import React, { useEffect } from "react";
import leftlogo from "../assets/yape.jpeg";
import rightlogo from "../assets/zita.jpeg";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export default function Header({ home, setHome }) {
  useEffect(() => {
    const saved = localStorage.getItem("home");

    if (saved !== null) {
      setHome(saved === "true");
    }
  }, []);

  const handlerHeaderLeft = () => {
    setHome(true);
    localStorage.setItem("home", "true");
    location.href = "/";
  };

  const handlerHeaderRight = () => {
    setHome(false);
    localStorage.setItem("home", "false");
    location.href = "/";
  };

  return (
    <>
      <header className="w-full absolute top-0 left-0 z-500">
        <div className="relative w-full flex gap-5 items-center justify-between overflow-hidden">
          {/* Right */}
          <div
            className={`${
              home ? "" : "h-full w-full rounded-br-4xl bg-gray-700"
            } p-2.5`}
          >
            <button
              className={`h-full w-fit p-2.5 flex flex-wrap justify-center gap-2.5 items-center cursor-pointer rounded-2xl bg-white ${
                !home && "border"
              }`}
              title="Left click"
              onClick={() => handlerHeaderLeft()}
            >
              <img
                src={leftlogo}
                alt=""
                className="w-32 h-14 object-cover"
              />
            </button>
          </div>
          {/* Left */}
          <div
            className={`${
              home ? "h-full w-full rounded-bl-4xl bg-gray-700" : ""
            } p-2.5`}
          >
            <button
              className={`h-full w-fit ml-auto p-2.5 flex flex-wrap justify-center gap-2.5 items-center cursor-pointer rounded-2xl bg-white ${
                home && "border"
              }`}
              title="Right click"
              onClick={() => handlerHeaderRight()}
            >
              <img src={rightlogo} alt="" className="w-32 h-14 object-cover" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
