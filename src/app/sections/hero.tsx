import React from "react";
import Link from "next/link";
import Image from "next/image";


import git from "../assets/github.svg";


export const Hero = () => {
  return (
    <section className="w-full border-b pb-10">
      <div className="flex flex-col ">
        <span className="text-4xl font-medium">Artem Polozov</span>
        <h1 className="text font-medium  ">Frontend developer</h1>
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Studing web developement since 2022. <br />
        Driven by desire to make digital experience fluid, secured and
        beautiful. <br />

      </p>

  

      {/* <Image /> */}
    </section>
  );
};
