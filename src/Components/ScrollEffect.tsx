"use client"

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollEffect = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-content", // Section triggering the animation
        start: "top top", // Start when the top of .main-content reaches the top of the viewport
        end: "bottom top", // End when the bottom of .main-content reaches the top of the viewport
        scrub: true, // Sync animation with scroll
      },
    });

    timeline
      .to(".main-content", { yPercent: -100, ease: "none" }) // Slide the main content up
      .to(".contact-section", { yPercent: 0, ease: "none" }, 0); // Reveal the contact section
  }, []);

  return (
    <div className="container">
      {/* Main Content Section */}
      <section className="main-content h-screen bg-gray-200 flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg mt-4">Scroll down to reveal the contact section.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section h-screen bg-gray-800 text-white flex items-center justify-center translate-y-full">
        <div>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-lg mt-4">Feel free to reach out!</p>
        </div>
      </section>
    </div>
  );
};

export default ScrollEffect;
