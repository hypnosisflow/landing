import Image from "next/image";
import Link from "next/link";
import { Hero } from "./sections/hero";
import { Experience } from "./sections/experience";
import { Projects } from "./sections/projects";
import { Contacts } from "./sections/contacts";

import git from "./assets/github.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start  justify-start max-w-5xl mx-auto px-12 lg:px-24">
      <header className=" w-full flex items-center h-[48px] justify-end">
        <nav>
          <ul>
            <li>
              <Link href="https://github.com/hypnosisflow" target="_blank">
                <Image src={git} width={24} height={24} alt={"github icon"} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Hero />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  );
}
