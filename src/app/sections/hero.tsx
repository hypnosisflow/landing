import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full border-b pb-10">
      <div>
        <span className="text-4xl font-thin">Artem Polozov</span>
        <h1 className="font-medium text-2xl">Frontend developer</h1>
      </div>

      <p className=" text-sm font-light mt-4">
        Studing web developement since 2022. <br />
        Driven by desire to make digital experience fluid, secured and
        beautiful. <br />

      </p>

      <div className="mt-4 flex gap-2 items-center ">
        <span className=" font-light text-sm">
          Checkout my CV <span>&#8594;</span>
        </span>
        <Link href="/docs/CV.pdf" target="_blank">EN</Link>
        <Link href="/docs/Resume.pdf" target="_blank">RU</Link>
  
      </div>

      {/* <Image /> */}
    </section>
  );
};
