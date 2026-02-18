import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function RightVideoBanner() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video scale animation (better than width)
      gsap.fromTo(
        videoRef.current,
        { scale: 0.6 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top-=140 top",
            end: "+=1050",
            scrub: true,
          },
        }
      );

      // Text animation
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "+=900 top",
            end: "+=900 top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert(); // ✅ cleanup
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[250vh]">
      <div className="sticky top-0 h-screen">
        <div ref={videoRef} className=" h-full flex items-end overflow-hidden">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2 
                     object-cover w-full h-full"
          >
            <source
              src="https://mart-harmonia.myshopify.com/cdn/shop/videos/c/vp/166e3cc6c1274e16b3bd9ea9359ae59c/166e3cc6c1274e16b3bd9ea9359ae59c.HD-1080p-7.2Mbps-53586387.mp4?v=0"
              type="video/mp4"
            />
          </video>
          <div className=" absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div
            ref={contentRef}
            className="relative z-10 text-start text-white px-6 duration-500 w-full flex max-md:flex-col justify-between md:items-center mb-10"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                Innovative Style, Classic Comfort
              </h2>
              <p className="max-w-xl text-lg">
                The perfect combination of contemporary style and long-lasting
                comfort - furniture that will add a touch of style to any home.
              </p>
            </div>
            <Button>Shop Collection</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
