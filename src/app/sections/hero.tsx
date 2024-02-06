import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full border-b pb-10">
      <div>
        <span className="text-4xl font-thin">Artem Polozov</span>
        <h1 className="font-bold text-2xl">Frontend developer</h1>
      </div>

      <p className=" text-sm font-light mt-4">
        Self-taught Web Developer since 2022. <br />
        Driven by desire to make digital experience fluid, transparent and
        beautiful. <br />
        Developing media,data scrapping and admin dashboards and tools. Also
        landing pages and telegram bots.
      </p>

      <div className="mt-4 flex gap-2 items-center ">
        <span className=" text-sm">
          Checkout my CV <span>&#8594;</span>
        </span>
        <Link href="/docs/CV.pdf" target="_blank">EN</Link>
        <Link href="/docs/Resume.pdf" target="_blank">RU</Link>
  
      </div>

      {/* <Image /> */}
    </section>
  );
};
