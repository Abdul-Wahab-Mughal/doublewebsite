import { Heart, Lightbulb, Stars } from "lucide-react";
import React from "react";

export default function RightMarquee() {
  const logos = [
    {
      icon: Heart,
      text: "Boost your points",
    },
    {
      icon: Stars,
      text: "Multiply Your Rewards",
    },
    {
      icon: Lightbulb,
      text: "Upgrade Your Space",
    },
  ];

  return (
    <section className="py-4 bg-(--rightbackground)/80 overflow-hidden relative">
      <div className="flex">
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-40 px-8"
            >
              <div className="flex gap-2 items-center text-black/60 font-semibold hover:text-black transition-colors whitespace-nowrap cursor-default uppercase">
                <logo.icon size={20} />
                {logo.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
