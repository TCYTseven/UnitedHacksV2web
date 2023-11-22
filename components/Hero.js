import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="home" className="hero-bg fade items-center justify-center  min-h-screen">
      <div className="flex  flex-col flex-wrap text-center justify-center  items-center">
        <Image
          alt="Hack United"
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
          className="scroller md:text-[1.8vw] text-[5vw] text-white"
        >
          <span>
            1.12.24 - 1.14.24 <br />
            Workshops <br />
            Prizes <br />
            & More <br />
          </span>{" "}
        </div>
        <div className="flex-row flex-wrap gap-4 items-center justify-center mt-12 flex">
          <Link target="_blank" rel="noopener noreferrer" href="https://discord.gg/hackunited">
            <button className="button font-bold inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none rounded-full text-black bg-[#DF6A50] text-xl border-black  lg:mt-0">
              Discord
            </button>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://unitedhacksv2.devpost.com">
            <button className="font-bold button inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none border rounded-full text-black bg-[#DF6A50] text-xl border-black  lg:mt-0">
              Devpost
            </button>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://hackunited.org/">
            <button className="font-bold button inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none border rounded-full text-black bg-[#DF6A50] text-xl border-black  lg:mt-0">
              Website
            </button>
          </Link>
        </div>
        {/* Play Trailer Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="button font-bold inline-block md:w-auto w-full md:px-[3vw] px-8 py-3 md:py-[0.9vw] leading-none rounded-full text-white bg-white text-xl border-white"
          >
            <span style={{ color: "black" }}>▶</span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content" style={{ width: "80%", height: "80%" }}>
      <span className="close" onClick={() => setIsModalOpen(false)}>
        &times;
      </span>
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://www.youtube.com/embed/xUouKtNYsl8?si=7PpiIBpzDmw7Dnj0&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}
    </div>
  );
}
