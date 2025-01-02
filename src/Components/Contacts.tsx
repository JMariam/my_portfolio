"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Contacts = () => {
  const [copied, setCopied] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const email = "mariamjubril29@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setIsContactVisible(true);
        } else {
          setIsContactVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="contact"
      className={classNames(
        "bg-secondary h-screen flex items-center justify-center text-white transition-transform duration-700",
        {
          "transform translate-y-0": !isContactVisible,
          "transform -translate-y-full": isContactVisible,
        }
      )}
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
