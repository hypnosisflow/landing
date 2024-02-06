import React from "react";

import Link from "next/link";

export const Experience = () => {
  return (
    <section className=" border-b py-10 w-full">
      <h2 className="text-2xl font-bold ">Experience</h2>

      <div className="mt-4">
        <h3 className="font-medium">Neiro.ai </h3>
        <p className="text-xs font-light">
          2023 - 2024 / San Francisco, CA. (remote)
        </p>
        <p className="text-sm  font-medium mt-2">Junior frontend developer</p>
        <p className="my-2 text-sm font-light">
          Assisted in the development of web applications using frontend stack
          of <br />
          <span className="font-medium">
            React, TailwindCSS + CSS Modules, MobX, Firebase, Figma
          </span>
          .
        </p>
        {/* <Link to='' /> */}
        <Link href="https://studio.neiro.ai" className="font-medium">
          {" "}
          <span className="font-light">&#8594;</span> https://studio.neiro.ai
        </Link>
        <ul className="text-sm font-light">
          <li>
            <span> - Developed responsive UI according Figma designs.</span>
          </li>
          <li>
            <span>- Used Redux for state management (migrated to MobX).</span>
          </li>
          <li>
            <span>
              - Integrated monetization (square.up) and developed UI for the
              flow with adding animation using Particles.js.
            </span>
          </li>

          <li>
            <span>- SEO optimization using Lighthouse (90+).</span>
          </li>
          <li>
            <span>- Integrated Firebase and Google Analytics.</span>
          </li>
          <li>
            <span>
              - Perfomance optimization with code splitting and lazy-loading.
            </span>
          </li>
        </ul>

        <Link href="https://neiro.ai" className="mt-2 block font-medium">
          {" "}
          <span className="font-light">&#8594;</span> https://neiro.ai
        </Link>
        <ul className="text-sm font-light">
          <li>
            <span> - Developed responsive landing page according Figma.</span>
          </li>
          <li>
            <span>
              - Improved website accessibility following WCAG guidelines
            </span>
          </li>
          <li>
            <span>- Reached SEO scores of 95+ using Lighthouse.</span>
          </li>

          <li>
            <span>
              - Intergrated Firebase to make users free to contact with Support
              Team and Google Analytics for business purposes.
            </span>
          </li>
          <li>
            <span>- Used Anime.js for implementing animations.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
