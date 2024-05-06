import React from "react";

import Link from "next/link";

export const Experience = () => {
  return (
    <section className=" border-b py-10 w-full">
      <h2 className="text-2xl font-medium">Experience</h2>

      <div className="mt-8">
        <h3 className="font-medium">Neiro.ai </h3>
        <p className="text-gray-400 text-sm">
          2023 - 2024 / San Francisco, CA. (remote)
        </p>
        <p className="mt-2 font-medium">Junior frontend developer</p>
        <p className="mt-2 text-gray-400 text-sm">
          Assisted in the development of web applications using Neiro AI generative technologies.
        </p>
        <span className="text-gray-400 text-sm">Techs:</span>
        <span className="ml-2  text-sm">
            React, TailwindCSS + CSS Modules, MobX, Firebase, Figma
          </span>
        <br />
        <Link href="https://studio.neiro.ai" className=" mt-2 block  font-medium text-sm" >
          {" "}
          <span className="">&#8594;</span> https://studio.neiro.ai
        </Link>
       
        <Link href="https://neiro.ai" className="mt-2 block   font-medium text-sm">
          {" "}
          <span className="">&#8594;</span> https://neiro.ai
        </Link>
  

      </div>

      
      <div className="mt-8">
        <h3 className="font-medium">EGAR Technology </h3>
        <p className="text-gray-400 text-sm">
          2024 - current / Tomsk, Russia.
        </p>
        <p className=" mt-2 font-medium">Frontend developer</p>
        <p className="mt-2 text-gray-400 text-sm">
          Assisted in the development of web applications using Neiro AI generative technologies.
        </p>
        <span className="text-gray-400 text-sm">Techs:</span>
        <span className="ml-2 text-s">
            React, TailwindCSS + CSS Modules, MobX, Firebase, Figma
          </span>
        <Link href="https://data.moex.com/" className="mt-2 block text-sm font-medium ">
          {" "}
          <span className="">&#8594;</span> https://data.moex.com/
        </Link>
       

       
      </div>
    </section>
  );
};
