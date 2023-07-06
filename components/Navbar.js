import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Navbar() {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

  const toggle=()=>{
    document.getElementsByClassName("register")[0].style.display="block";
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    var navbar = document.querySelectorAll(".nav-links");
    var reveals = document.querySelectorAll(".heading");
    for (var i = 0; i < navbar.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        navbar[i].classList.add("activeLink");
        if (i > 0) {
          navbar[i].classList.add("activeLink");
          navbar[i - 1].classList.remove("activeLink");
        }
      } else {
        navbar[i].classList.remove("activeLink");
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      setBackgroundTransparacy(backgroundTransparacyVar);
    }
  }, [clientWindowHeight]);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav
      style={{
        background: `${
          backgroundTransparacy === 0 ? "transparent" : "black"
        }`,
      }}
      className="flex fade top-0 sticky items-center justify-between flex-wrap px-3 py-3"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src={"/navbarlogo.png"}
          width={300}
          height={120}
          className="w-[160px] h-[80px]"
        />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded"
          onClick={toggleMenu}
        >
          <svg
            width="48"
            height="47"
            viewBox="0 0 48 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 35.25H40"
              stroke="#DF6A50"
              strokeOpacity="0.686275"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M8 23.5H40"
              stroke="#DF6A50"
              strokeOpacity="0.686275"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M8 11.75H40"
              stroke="#DF6A50"
              strokeOpacity="0.686275"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuVisible ? "fade scale" : "hidden"
        }  w-full text-center block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-xl nav-mid text-white lg:flex-grow">
          <Link
            scroll={false}
            className="block nav-links mt-4 lg:inline-block lg:mt-0 nav-link-ltr mr-14"
            href="#home"
          >
            Home
          </Link>
          <Link
            scroll={false}
            className="block mt-4 nav-links lg:inline-block lg:mt-0 nav-link-ltr mr-14"
            href="#explore"
          >
            Explore
          </Link>
          <Link
            scroll={false}
            href="#prizes"
            className="block mt-4 lg:inline-block nav-link-ltr lg:mt-0 nav-links mr-14"
          >
            Prizes
          </Link>
          <Link
            scroll={false}
            className="block mt-4 lg:inline-block lg:mt-0 nav-links nav-link-ltr"
            href="#sponsors"
          >
            Sponsors
          </Link>
        </div>
        <div className="flex-col flex">
          <button onClick={toggle} className="inline-block button px-12 py-4 leading-none border rounded-full text-black bg-[#DF6A50] text-xl border-black mt-4 lg:mt-0">
            Register
          </button>
        </div>
        <div className="flex-col md:absolute relative  flex">
        <Link  target="_blank" rel="noopener noreferrer" href="https://discord.gg/N7QgrKwQCP">
        <button className=" button inline-block md:w-auto w-full px-12 py-4 leading-none border rounded-full text-black bg-purple-600 text-xl border-black mt-4 lg:mt-0">
          Discord

        </button>
        </Link>
        </div>
      </div>
    </nav>
  );
}