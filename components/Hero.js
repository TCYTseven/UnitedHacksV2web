import Image from "next/image";
import Link from "next/link";
import { ibmPlexMono } from "../font";

export default function Hero() {
  return (
    <div id="home" className="hero-bg fade items-center justify-center  min-h-screen">
      <div className="flex  flex-col flex-wrap text-center justify-center  items-center">
        <Image alt="Hack United"
          className="scale w-[80vw] md:w-[30vw] mb-5 mt-10"
          src={"/earth.png"}
          width={600}
          height={400}
        />
        <div className="flex flex-row">
         
          <h1 className="md:text-[4vw] text-[9vw] font-bold text-[#400090] hackunited ">
             UNITED HACKS
          </h1>
        </div>
        <div
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
          className="  scroller md:text-[1.8vw] text-[5vw] text-white"
        >
          <span>
          5.19.23 - 5.20.23 <br />
            Workshops <br />
            Prizes <br />
            {/* Learning <br /> */}
            & More <br />
          </span>{" "}
        </div>
        <div className="flex-row flex-wrap gap-4 items-center justify-center mt-12   flex">
        <Link  target="_blank" rel="noopener noreferrer" href="https://discord.gg/hackunited">
        <button className=" button font-bold inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none  rounded-full 
        text-black bg-[#DF6A50] text-xl border-black  lg:mt-0">
          Discord

        </button>
        </Link>
        <Link  target="_blank" rel="noopener noreferrer" href="https://unitedhacks23.devpost.com">
        <button className=" font-bold button inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none border rounded-full text-black bg-[#DF6A50] text-xl border-black  lg:mt-0">
          Devpost

        </button>
        </Link>
        <Link  target="_blank" rel="noopener noreferrer" href="https://bank.hackclub.com/donations/start/hackunited">
        <button className="font-bold button inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none border rounded-full text-black bg-[#DF6A50] text-xl border-black  lg:mt-0">
          Website

        </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
