import Image from "next/image";
import { ibmPlexMono } from "../font";

export default function Hero() {
  return (
    <div className="hero-bg fade items-center justify-center  min-h-screen">
      <div className="flex  flex-col flex-wrap text-center justify-center  items-center">
        <Image
          className="scale w-[80vw] md:w-[30vw] mb-5 mt-10"
          src={"/earth.png"}
          width={600}
          height={400}
        />
        <div className="flex flex-row">
          <svg
            className="mr-5 md:w-[2.5vw] md:mt-0 mt-[-3vw] w-[5vw] popfromleft fade"
            width="50"
            height="70"
            viewBox="0 -10 42 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.89 41.01V29.11L14.66 24.86L26.22 20.95V20.61L14.66 16.7L0.89 12.45V0.549996L41.01 15.85V25.71L0.89 41.01Z"
              fill="#5608A5"
            />
          </svg>
          <h1 className="md:text-[4vw] text-[9vw] mr-5 text-[#DF6A50] hackunited text-savapro">
             UNITED HACKS
          </h1>
        </div>
        <div
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
          className="hackunited md:mt-0 mt-[-3vw] scroller md:text-[1.8vw] text-[4vw] text-white"
        >
          <span>
            www.hackunited.org <br />
            Hackathons <br />
            Workshops <br />
            & More <br />
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
