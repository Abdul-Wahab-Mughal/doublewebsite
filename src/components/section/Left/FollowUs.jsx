import React, { useEffect, useRef } from "react";
import Button from "../../ui/Button";
import gsap from "gsap";

export default function FollowUs() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const track = galleryRef.current;
      const trackWidth = track.scrollWidth;
      const screenWidth = window.innerWidth;

      const maxMove = trackWidth - screenWidth;

      const percent = e.clientX / screenWidth;

      const moveX = -maxMove * percent - 50;

      console.log(moveX);
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
          {[...Array(10)].map((_, i) => (
            <div className=" min-w-1/5" key={i}>
              <img
                src="https://mart-harmonia.myshopify.com/cdn/shop/files/instagram_01.jpg?v=1753959220&width=535"
                className=" aspect-3/4 rounded-xl w-full object-coverr"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
