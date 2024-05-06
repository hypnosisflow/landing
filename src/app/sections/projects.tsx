import React from "react";
import Image from "next/image";
import Link from "next/link";

import don from '../assets/tg/DONUT.png'
export const Projects = () => {
  return (
    <section className=" border-b  py-10 w-full">
      <h2 className="text-2xl font-medium">Projects</h2>

      <div className="mt-8">
        <h3 className="font-medium">Telegram Scrapper </h3>
        <p className="text-sm text-gray-400">2023 - 2024</p>
        <p className=" font-medium mt-2">Fullstack developer</p>
        <p className="mt-2 text-sm text-gray-400">
          Developed simple tool for extracting Users information and messages
          from certain group chat using chat ID.
        </p>
        <p className=" text-sm">
          React, TailwindCSS, Context API, Node (Express), Telegram API,
          Chat-GPT 3.5 API, ElephantSQL.
        </p>
      </div>


      <div className="flex flex-col md:flex-row gap-2 mt-4">
      <div className="text-sm mt-2">
        <p className="text-gray-400">Easy steps:</p>
        <ul>
          <li>
            {" "}
            - Guided flow to get id of group chat from Telegram.
          </li>
          <li>
            {" "}
            - Pick the Month you wish to inspect.
          </li>
          <li>
            {" "}
            - Get your report! Filter, edit and save it into datase. 
          </li>
        </ul>

        <p className="mt-2 text-gray-400 ">Expepremental feature:</p>
        <ul>
          <li className=" ">
            - Simply copy User ID and analyze conent for
            positive/neutral/negrative mood with help of Chat-GPT
          </li>
        </ul>

        <Link href="https://github.com/hypnosisflow/tgcli" target="_blank" className="mt-8 block">
          <span className="font-light">&#8594;</span>{" "}
          <span className="font-medium text-sm">
            https://github.com/hypnosisflow/tgcli
          </span>
        </Link>
      </div>
      <Image src={don} width={420} height={236}  alt="tgcli" className="rounded-lg shadow-lg" />

      </div>
     

      <div className="mt-4 flex gap-2 items-center">
    
      </div>


    </section>
  );
};
