
// "use client"
// import { useEffect, useRef } from "react";

// const ScrollEffect: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const contactSection = document.getElementById("contact");

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           container?.classList.add("section-contact-visible");
//         } else {
//           container?.classList.remove("section-contact-visible");
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the contact section is visible
//     );

//     if (contactSection) observer.observe(contactSection);

//     return () => {
//       if (contactSection) observer.unobserve(contactSection);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="main-container">
//       <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
//         <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
//       </section>
//       <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
//         <h2 className="text-3xl font-bold">About Me</h2>
//       </section>
//       <section
//         id="contact"
//         className="h-screen bg-blue-600 flex items-center justify-center text-white"
//       >
//         <h2 className="text-3xl font-bold">Get in Touch</h2>
//       </section>
//     </div>
//   );
// };

// export default ScrollEffect;
