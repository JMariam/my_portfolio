"use client";
import React, { useState } from "react";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const email = "mariamjubril29@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="contact" className="bg-secondary h-screen flex items-center justify-center">
      <div className=" w-[80%] mx-auto p-6 bg-accent h-[70%] flex flex-col justify-center">
        <p className="">I am always available for a chat</p>
        <p className=""></p>
        {copied && <p className="text-white">Email copied to clipboard!</p>}
        <button onClick={handleCopy} className="text-white text-[45px]">
          mariamjubril29@gmail.com
        </button>
      </div>
    </section>
  );
};

export default CopyEmail;
