/* eslint-disable @next/next/no-img-element */
import React from "react";

// interface ProjectsProps {
//   title: string;
//   img: string;
//   text: string;
// }

export default function Projects() {
  return (
    <section className="grid grid-cols-7 gap-6 w-[90%] mx-auto p-6">
      <div className="relative cursor-pointer col-span-3">
        <img src="/pro2.png" alt="" className="h-[20rem]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-opacity duration-300">
          This is some text displayed on hover!
        </div>
      </div>
      <div className="cursor-pointer col-span-4 ">
        <img src="/pro1.png" alt="" className="h-[30rem]" />
      </div>
      <div className="cursor-pointer col-span-4">
        <img src="/pro2.png" alt="" className="h-[30rem]" />
      </div>
      <div className="cursor-pointer col-span-3">
        <img src="/pro1.png" alt="" className="h-[20rem] w-full" />
      </div>
    </section>
  );
}
