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
          <div className="slidersponsers">
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
          </div>

          <div className="slidersponsers">
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
          </div>
        </logo-slider>
      </div>
      <div className="mt-0 md:mt-14 md:mb-16 flex-row flex-wrap flex   gap-10 justify-center items-center">
        <logo-slider>
          <div className="slidersponsers">
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
          </div>

          <div className="slidersponsers">
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://hackunited.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/comingsoon.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[9vw] " width={200}
                height={200}
              />
            </Link>
          </div>
        </logo-slider>
      </div>
      <div style={{height: '1px'}}></div>
      <center>
  <h3 style={{color: "white", fontSize: "18px"}}>
    Want to sponsor us? View our <a href="https://hackunited.org/#comingsoon" style={{textDecoration: "underline", color: "deepskyblue"}}>Sponsorship Prospectus</a> and email <a href="mailto:humans@hackunited.org" style={{textDecoration: "underline", color: "deepskyblue"}}>humans@hackunited.org</a>!
  </h3>
</center>
    </div>
  );
}
