import React from "react";
import Image from "next/image";
import Link from "next/link";
import email from "../assets/email.svg";
import tg from "../assets/telegram.svg";
export const Contacts = () => {
  return (
    <footer className="py-10 w-full flex flex-col">

      
  

      <ul className="   flex flex-  gap-2 items-center justify-center">
      <li className="opacity-50 hover:opacity-100">
        <Link href="/docs/CV.pdf" target="_blank" className="">CV</Link>
        </li>
      <li className="opacity-50 hover:opacity-100">
      <Link href="https://github.com/hypnosisflow" target="_blank" className="flex gap-2">
        <span className="">GitHub</span>

                {/* <Image src={git} width={20} height={20} alt={"github icon"} /> */}
        </Link>
        </li>
      

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


      <p className="text-xs mx-auto mt-10 text-gray-200">@ 2024</p>
    </footer>
  );
};
