import React from "react";
import Image from "next/image";
import Link from "next/link";
import email from "../assets/email.svg";
import tg from "../assets/telegram.svg";
export const Contacts = () => {
  return (
    <footer className="py-10 w-full flex flex-col">
      <h2 className="text-2xl font-medium">Get In Touch</h2>

      <ul className="text-xl font-light my-4  flex flex-col gap-1">
        <li className="opacity-50 hover:opacity-100">
          <Link
            href={"mailto:hypnosisflow@gmail"}
            target="_blank"
            className="flex gap-2 items-center"
          >
            {/* <Image src={email} width={20} height={20} alt="email-icon" /> */}
            <span>hypnosisflow@gmail.com</span>
          </Link>
        </li>
        <li className="opacity-50 hover:opacity-100">
          <Link
            href={"https://t.me/hpnssflw"}
            target="_blank"
            className="flex gap-2 items-center"
          >
            {/* <Image src={tg} width={20} height={20} alt="telegram-icon" /> */}
            <span>hpnssflw</span>
          </Link>
        </li>
      </ul>

      <p className="text-xs mx-auto mt-20 text-gray-200">@ 2024</p>
    </footer>
  );
};
