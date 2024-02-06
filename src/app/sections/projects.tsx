import React from "react";
import Image from "next/image";
import Link from "next/link";


export const Projects = () => {
  return (
    <section className=" border-b  py-10 w-full">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="mt-4">
        <h3 className="font-medium">Telegram Scrapper </h3>
        <p className="text-xs font-light">2023 - 2024</p>
        <p className="text-sm  font-medium mt-2">Fullstack developer</p>
        <p className="mt-2 text-sm font-light">
          Developed simple tool for extracting Users information and messages
          from certain group chat using chat ID.
        </p>
        <p className="font-medium text-sm">
          React, TailwindCSS, Context API, Node (Express), Telegram API,
          Chat-GPT 3.5 API, ElephantSQL.
        </p>
      </div>

      <div className="text-sm font-light mt-2">
        <p>Easy as one-two-three flow:</p>
        <ul>
          <li>
            {" "}
            - Choose period and request history of Group Chat by ID and get data
            sorted by Users list with their messages.
          </li>
          <li>
            {" "}
            - Add list to dashboard and reuest full avalible information about
            Users accounts. Make last manipulations before sending data to
            Database.
          </li>
          <li>
            {" "}
            - On Database page you can get all users with used filters and date
            when the repotrs were done.
          </li>
        </ul>

        <p className="mt-2">Expepremental feature:</p>
        <ul>
          <li>
            - Simply copy User ID and analyze conent for
            positive/neutral/negrative mood with help of Chat-GPT
          </li>
        </ul>
      </div>

      <div className="mt-4 flex gap-2 items-center">
        <Link href="https://github.com/hypnosisflow/tgcli" target="_blank">
          <span className="font-light">&#8594;</span>{" "}
          <span className="font-medium">
            https://github.com/hypnosisflow/tgcli
          </span>
        </Link>
      </div>
    </section>
  );
};
