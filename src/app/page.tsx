/* eslint-disable @next/next/no-img-element */
// "use client";

import Layout from "@/Components/Layout";
// import type { AppProps } from "next/app";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";

import Projects from "@/Components/Projects";
import Contacts from "@/Components/Contacts";

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
          <div className="flex gap-6 ">
            <Link
              href="https://github.com/JMariam?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[32px] text-accent cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mariam-jubril/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[32px] text-accent cursor-pointer" />
            </Link>
            <Link
              href="https://x.com/MariamJubril7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="text-[32px] text-accent cursor-pointer" />
            </Link>
            <Link href="mailto:mariamjubril29@gmail.com">
              <IoMailOpen className="text-[32px] text-accent cursor-pointer" />
            </Link>
          </div>
        </div>
        {/* <div className="w-[50%] self-center">
          <img src="/heero.png" alt="" className="w-[]" />
        </div> */}
      </section>

      {/* PROJECTS */}

      <Projects />

      <Contacts />
    </Layout>
  );
}
