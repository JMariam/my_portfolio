/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const email = "mariamjubril29@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <section
      id="contac"
      className="h-screen bg-secondary flex items-center justify-center text-text"
    >
      <div className="relative w-[80%] mx-auto bg-primary h-[70%] flex justify-between p-20 space-x-28">
        <div className="w-[50%]">
          <img src="/unndraw.svg" alt="" className="" />
        </div>

        <div className="w-[50%] flex flex-col gap-6">
          <p className="font-bold text-[30px] leading-none [word-spacing:-6px]">
            I am always available for a chat!
          </p>
          <p className="mt-6 text-[20px]">
            <Link
              href="mailto:mariamjubril29@gmail.com"
              className="underline font-bold"
            >
              Send an email
            </Link>{" "}
            to mariamjubril29@gmail.com
            <span>
              {" "}
              to reach out to me or click the button below to copy my email
              address.
            </span>
          </p>
          <p className="py-2 px-4 bg-accent rounded-md w-fit flex items-center gap-2 text-white">
            <button onClick={handleCopy} className="">
              {copied ? "Email copied to clipboard!" : "Copy email"}
            </button>
          </p>
          <p className="absolute -bottom-[25px] font-[900] text-[65px]">Holla amigos!</p>
        </div>
      </div>
    </section>
  );
}
