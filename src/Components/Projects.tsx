/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

// interface ProjectsProps {
//   title: string;
//   img: string;
//   text: string;
// }

export default function Projects() {
  return (
    <section className="w-[90%] mx-auto lg:p-6 my-8">
      <div className="mb-8 lg:mb-12">
        <p className="text-[35px] leading-[50px] font-bold">PORTFOLIO</p>
        <p className="text-[18px] lg:w-[30%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          unde.
          </p>
      </div>
      <div className="grid lg:grid-cols-7 gap-6 ">
        <div className="relative lg:col-span-3">
          <img src="/pro2.png" alt="" className="h-[15rem] lg:h-[20rem] w-full" />
          <div className="w-[100%] h-[15rem] lg:h-[20rem] top-0 left-0 absolute bg-secondary gap-6 p-8 flex justify-center lg:items-center flex-col opacity-0 hover:opacity-100 transition-all">
            <p className="lg:text-center text-[13px] lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
              iste obcaecati fugiat voluptates repudiandae sapiente voluptatum
              maxime alias expedita!
            </p>
            <Link
              href=""
              className="py-2 px-4 bg-accent rounded-full w-fit flex items-center gap-2"
            >
              <p className="text-[17px] text-white"> View Website</p>

              <FaAngleRight className="text-primary" />
            </Link>
          </div>
        </div>
        <div className="relative  lg:col-span-4">
          <img src="/pro1.png" alt="" className="h-[15rem] lg:h-[30rem] w-full" />
          <div className="w-[100%] h-[15rem] lg:h-[20rem] top-0 left-0 absolute bg-secondary gap-6 p-8 flex justify-center lg:items-center flex-col opacity-0 hover:opacity-100 transition-all">
            <p className="lg:text-center text-[13px] lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
              iste obcaecati fugiat voluptates repudiandae sapiente voluptatum
              maxime alias expedita!
            </p>
            <Link
              href=""
              className="py-2 px-4 bg-accent rounded-full w-fit flex items-center gap-2"
            >
              <p className="text-[17px] text-white"> View Website</p>

              <FaAngleRight className="text-primary" />
            </Link>
          </div>
        </div>
        <div className="relative  lg:col-span-4">
          <img src="/pro2.png" alt="" className="h-[15rem] lg:h-[30rem] w-full" />
          <div className="w-[100%] h-[15rem] lg:h-[20rem] top-0 left-0 absolute bg-secondary gap-6 p-8 flex justify-center lg:items-center flex-col opacity-0 hover:opacity-100 transition-all">
            <p className="lg:text-center text-[13px] lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
              iste obcaecati fugiat voluptates repudiandae sapiente voluptatum
              maxime alias expedita!
            </p>
            <Link
              href=""
              className="py-2 px-4 bg-accent rounded-full w-fit flex items-center gap-2"
            >
              <p className="text-[17px] text-white"> View Website</p>

              <FaAngleRight className="text-primary" />
            </Link>
          </div>
        </div>
        <div className="relative  lg:col-span-3">
          <img src="/pro1.png" alt="" className="h-[15rem] lg:h-[20rem] w-full" />
          <div className="w-[100%] h-[15rem] lg:h-[20rem] top-0 left-0 absolute bg-secondary gap-6 p-8 flex justify-center lg:items-center flex-col opacity-0 hover:opacity-100 transition-all">
            <p className="lg:text-center text-[13px] lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
              iste obcaecati fugiat voluptates repudiandae sapiente voluptatum
              maxime alias expedita!
            </p>
            <Link
              href=""
              className="py-2 px-4 bg-accent rounded-full w-fit flex items-center gap-2"
            >
              <p className="text-[17px] text-white"> View Website</p>

              <FaAngleRight className="text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
