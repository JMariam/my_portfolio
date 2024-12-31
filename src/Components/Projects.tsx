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
