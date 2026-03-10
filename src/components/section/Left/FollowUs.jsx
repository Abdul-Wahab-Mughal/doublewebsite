import React, { useEffect, useRef } from "react";
import Button from "../../ui/Button";
import gsap from "gsap";

const image = [
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_01.jpg?v=1753959220&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_02.jpg?v=1753959219&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_03.jpg?v=1753959220&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_04.jpg?v=1753959220&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_05.jpg?v=1753959220&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_06.jpg?v=1753959219&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_07.jpg?v=1753959222&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_08.jpg?v=1753959221&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_09.jpg?v=1753959220&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_10.jpg?v=1753959219&width=535",
  "https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_11.jpg?v=1753959222&width=535",
];

export default function FollowUs() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const track = galleryRef.current;
      const trackWidth = track.scrollWidth;
      const screenWidth = window.innerWidth;

      const maxMove = trackWidth - screenWidth;

      const percent = e.clientX / screenWidth;

      const moveX = -maxMove * percent - 25;

      // console.log(moveX);
      gsap.to(track, {
        x: moveX,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="py-5 md:py-10 max_width">
      <Button className="border-black text-black mt-0!">Follow us</Button>

      <div className=" w-full overflow-hidden py-10">
        <div className="flex gap-5" ref={galleryRef}>
          {image.map((img, i) => (
            <div className=" min-w-1/3 md:min-w-1/5" key={i}>
              <img
                src={img}
                className=" aspect-3/4 rounded-xl w-full object-coverr"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
