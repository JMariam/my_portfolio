/* eslint-disable @next/next/no-img-element */
// "use client";

import Layout from "@/Components/Layout";
// import type { AppProps } from "next/app";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <Layout>
      <section className="w-[90%] m-auto flex ">
        <div className="">
          <div className="">
            <h1 className="">JUBRIL MARIAM</h1>
            <h3 className="">FRONTEND DEVELOPER</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              unde.
            </p>
          </div>
          <div className="flex gap-4 ">
            <FaGithub className="text-[32px] text-accent" />
            <FaLinkedin className="text-[32px] text-accent" />
            <FaSquareXTwitter className="text-[32px] text-accent" />
          </div>
        </div>
        {/* <div className="w-[50%] self-center">
          <img src="/heero.png" alt="" className="w-[]" />
        </div> */}
      </section>

      {/* PROJECTS */}

      <Projects />
    </Layout>
  );
}
