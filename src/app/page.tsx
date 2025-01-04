/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "@/Components/Layout";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";

import Projects from "@/Components/Projects";
import Contacts from "@/Components/Contacts";

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current || !contactRef.current) return;

      const mainContent = mainContentRef.current;
      const contactSection = contactRef.current;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
      
      // Calculate when we're near the bottom of the main content
      const contactTop = contactSection.offsetTop;
      const mainContentBottom = mainContent.offsetHeight;
      const isNearContact = mainContentBottom - scrollY - windowHeight < 100;

      if (scrollDirection === 'down' && isNearContact) {
        setIsRevealing(true);
        // Slide the main content up
        mainContent.style.position = 'fixed';
        mainContent.style.top = '0';
        mainContent.style.width = '100%';
        mainContent.style.transform = `translateY(-${mainContentBottom - contactTop}px)`;
      } else if (scrollDirection === 'up' && scrollY < mainContentBottom - windowHeight) {
        setIsRevealing(false);
        // Slide the main content back down
        mainContent.style.position = 'relative';
        mainContent.style.transform = 'translateY(0)';
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Layout>
      <div
        ref={mainContentRef}
        className="bg-white transform relative z-10 transition-transform duration-700 ease-in-out"
        style={{ zIndex: 2 }}
      >
        <section className="w-[90%] m-auto flex ">
          <div className="">
            <div className="">
              <h1 className="">JUBRIL MARIAM</h1>
              <h3 className="">FRONTEND DEVELOPER</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, unde.
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
      </div>
      <Contacts contactRef={contactRef}  />
    </Layout>
  );
}
