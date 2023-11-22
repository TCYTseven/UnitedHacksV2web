import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Sponsers() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".slidersponsers");

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
  const firstrowsponsors = [
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
  ];
  const secondrowsponsors = [
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
    {
      imageLink: "/comingsoon.png",
      href: "https://hackunited.org/#donate",
      name: "AOPS",
    },
  ];
  return (
    <div id="sponsors" className="  ">
      <div className="text heading pt-[100px]">
        <h1
          className=" text-center md:text-[4vw] text-[10vw] sponsers-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Our Sponsors
        </h1>
      </div>
      <div className="mt-5  flex-row flex-wrap flex   gap-10 justify-center items-center">
        <logo-slider>
          <div className="z-no slidersponsers">
            {firstrowsponsors.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={item.href}
                    className="mr-10 mt-8 cursor-pointer duration-300 hover:-translate-y-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      key={index}
                      alt={item.name}
                      src={item.imageLink}
                      className="h-[75px] w-full max-w-[150px] rounded-lg object-contain md:h-[100px] md:max-w-[200px] lg:h-[150px] lg:max-w-[350px]"
                      width={200}
                      height={200}
                    />
                  </Link>
                </>
              );
            })}
          </div>
          <div className="z-no slidersponsers">
            {secondrowsponsors.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={item.href}
                    className="mr-10 mt-8 cursor-pointer duration-300 hover:-translate-y-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      key={index}
                      alt={item.name}
                      src={item.imageLink}
                      className="h-[75px] w-full max-w-[150px] rounded-lg object-contain md:h-[100px] md:max-w-[200px] lg:h-[150px] lg:max-w-[350px]"
                      width={200}
                      height={200}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </logo-slider>
      </div>
      <div className="mb-12 z-no  flex-row flex-wrap flex   gap-10 justify-center items-center">
        <logo-slider>
          <div className="slidersponsers">
            {secondrowsponsors.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="mr-10 mt-8 cursor-pointer duration-300 hover:-translate-y-2"
                    rel="noopener noreferrer"
                  >
                    <Image
                      key={index}
                      alt={item.name}
                      src={item.imageLink}
                      className="h-[75px] w-full max-w-[150px] rounded-lg object-contain md:h-[100px] md:max-w-[200px] lg:h-[150px] lg:max-w-[350px]"
                      width={200}
                      height={200}
                    />
                  </Link>
                </>
              );
            })}
          </div>
          <div className="z-no slidersponsers">
            {firstrowsponsors.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={item.href}
                    className="mr-10 mt-8 cursor-pointer duration-300 hover:-translate-y-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      key={index}
                      alt={item.name}
                      src={item.imageLink}
                      className="h-[75px] w-full max-w-[150px] rounded-lg object-contain md:h-[100px] md:max-w-[200px] lg:h-[150px] lg:max-w-[350px]"
                      width={200}
                      height={200}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </logo-slider>
      </div>
      <div style={{ height: "1px" }}></div>
      <center>
        <h3 style={{ color: "gray", fontSize: "18px" }}>
          Want to sponsor us? View our{" "}
          <a
            href="https://drive.google.com/file/d/1QVr7WmvAL858uL5APvj9X6Gnl0Jf-96u/view?usp=sharing"
            style={{ textDecoration: "underline", color: "#DF6A50" }}
          >
            Sponsorship Prospectus
          </a>{" "}
          and email{" "}
          <a
            href="mailto:sponsor@hackunited.org"
            style={{ textDecoration: "underline", color: "#DF6A50" }}
          >
            sponsor@hackunited.org
          </a>
          !
        </h3>
      </center>
    </div>
  );
}
