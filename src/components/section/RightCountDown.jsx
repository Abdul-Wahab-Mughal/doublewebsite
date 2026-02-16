import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function RightCountDown() {
  const targetDate = new Date("2026-03-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-8 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://mart-harmonia.myshopify.com/cdn/shop/files/timer_image_1.jpg?v=1753956754&width=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center flex justify-between">
        <div className=" space-y-5">
          <div>
            <h2 className="text-3xl uppercase">Sleek Spaces,</h2>
            <h2 className="text-3xl uppercase"> Exclusive Savings</h2>
          </div>
          <p className=" text-lg">Final Hours to Save Big</p>

          <Button text="shop now" className="m-auto" />
        </div>

        {/* Countdown */}
        <div className="flex items-center">
          {timeLeft ? (
            <div className="flex justify-center gap-8 text-center">
              <TimeBlock value={timeLeft.days} label="Days" />
              <TimeBlock value={timeLeft.hours} label="Hours" />
              <TimeBlock value={timeLeft.minutes} label="Minutes" />
              <TimeBlock value={timeLeft.seconds} label="Seconds" />
            </div>
          ) : (
            <h2 className="text-2xl mt-10">Sale has ended</h2>
          )}
        </div>
      </div>
    </section>
  );
}

function TimeBlock({ value, label }) {
  return (
    <div>
      <div className="text-5xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="uppercase text-sm tracking-wider">{label}</div>
    </div>
  );
}
