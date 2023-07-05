import Image from "next/image";
import { ibmPlexMono } from "../font";

export default function Hero() {
  return (
    <div className="hero-bg  h-[87vh] min-h-screen">
      <div className="flex  flex-col flex-wrap text-center justify-center  items-center">
        <Image
          className="scale w-[50vw] md:w-[30vw] mt-10"
          src={"/earth.png"}
          width={600}
          height={400}
        />
        <div className="flex flex-row">
          <svg
            className="mr-5 md:w-[2.5vw] w-[5vw] popfromleft fade"
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
          <h1 className="md:text-8xl text-4xl mr-5 text-[#DF6A50] hackunited text-savapro">
            HACK UNITED
          </h1>
        </div>
        <div
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
          className="hackunited scroller text-4xl text-white"
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
