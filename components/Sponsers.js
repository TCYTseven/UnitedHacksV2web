import Image from "next/image";
import { useEffect } from "react";

export default function Sponsors() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".slidersponsors");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <div id="sponsors" className="min-h-screen justify-center items-center mt-3 pb-[10px]">
    <div className="text heading pt-[10px]"> 
        <h1
          className=" text-center md:text-[4vw] text-[10vw] prizes-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Our Sponsors
        </h1>
      </div>
      <div className="mt-5 md:mt-24 flex-row flex-wrap flex gap-10 justify-center items-center">
        <div className="slidersponsors">
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
        </div>
        <div className="slidersponsors">
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
        </div>
        <div className="slidersponsors">
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
        </div>
        <div className="slidersponsors">
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
          <a href="https://hackunited.org" target="_blank" rel="noopener noreferrer">
            <Image alt="Hack United" src={"/sponser1.webp"} width={200} height={200} style={{padding: '10px', border: '0px solid black'}} />
          </a>
        </div>
      </div>
    </div>
  );
}
