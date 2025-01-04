"use client";
import React, { useState } from "react";
// import classNames from "classnames";

interface ContactsProps {
  contactRef: React.RefObject<HTMLElement>;
  isContactVisible: boolean;
}

const Contacts: React.FC<ContactsProps> = ({
  contactRef,
  isContactVisible,
}) => {
  const [copied, setCopied] = useState(false);
  // const [isContactVisible, setIsContactVisible] = useState(false);
  const email = "mariamjubril29@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const contactSection = document.getElementById("contact");
  //     if (contactSection) {
  //       const rect = contactSection.getBoundingClientRect();
  //       if (rect.top <= window.innerHeight / 2) {
  //         setIsContactVisible(true);
  //       } else {
  //         setIsContactVisible(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="fixed bottom-0 left-0 w-full min-h-screen bg-secondary flex items-center justify-center text-white "
      style={{ zIndex: 1 }}
    >
      <div className=" w-[80%] mx-auto p-6 bg-accent h-[70%] flex flex-col justify-center">
        <p className="">I am always available for a chat</p>
        <p className=""></p>
        {copied && <p className="">Email copied to clipboard!</p>}
        <button onClick={handleCopy} className="text-[45px]">
          mariamjubril29@gmail.com
        </button>
      </div>
    </section>
  );
};

export default Contacts;
