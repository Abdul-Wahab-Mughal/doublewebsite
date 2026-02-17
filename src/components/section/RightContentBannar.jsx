import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RightContentBannar() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin Section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      });

      // Image Zoom
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Overlay Fade
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.6 },
        {
          opacity: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Letter Animation
      gsap.fromTo(
        textRef.current.querySelectorAll(".letter"),
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const text =
    "Born from a passion for design, our story weaves craftsmanship and innovation into every piece, creating timeless furniture that redefines living spaces with elegance and purpose.";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Image */}
        <img
          //   ref={imageRef}
          src="https://mart-harmonia.myshopify.com/cdn/shop/files/about_image_5.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.4 }}
        />

        {/* Content */}
        <div
          ref={textRef}
          className="relative z-10 text-white max-w-3xl px-6 text-left"
        >
          <h2 className="text-4xl md:text-3xl font-bold leading-tight">
            {text.split(" ").map((word, i) => (
              <span key={i} className="letter inline-block mr-2 opacity-20">
                {word}
              </span>
            ))}
          </h2>

          <a
            href="/pages/about"
            className="mt-6 inline-block border border-white px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
