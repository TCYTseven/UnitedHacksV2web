import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Navbar() {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

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
  const [show, setShow] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("activelink");
        if (li.classList.contains(current)) {
          li.classList.add("activelink");
        }
      });
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setShow(visible);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={` ${
        !isMobile ? show ? "toptobottom " : "poptotop ": ""
        }  flex fade top-0 sticky items-center  justify-between flex-wrap `}
    >
    
      <div className="block lg:hidden">
        <button
          className="flex items-center z-50 px-3 py-2 rounded"
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
        }   w-full text-center block flex-grow lg:flex md:relative -z-10 fixed lg:items-center lg:w-auto`}
      >
        <div className=" md:text-xl text-md md:mt-0 mt-64 flex flex-row md:flex-nowrap flex-wrap slidd px-3 py-3 mx-auto rounded-br-3xl rounded-bl-3xl w-auto 
        nav-mid navbg text-white  md:justify-center">
        <Image alt="Hack United"
          src={"/earth.png"}
          width={100}
          height={100}
          className=""
        />
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
            href="#information"
            className="block mt-4 lg:inline-block nav-link-ltr lg:mt-0 nav-links mr-14"
          >
            Information
          </Link>
          <Link
            scroll={false}
            className="block mt-4 lg:inline-block lg:mt-0 nav-links nav-link-ltr"
            href="#signup"
          >
            Register
          </Link>
          <Link
            scroll={false}
            className="block mt-4 lg:inline-block lg:mt-0 nav-links nav-link-ltr"
            href="#sponsors"
          >
            Sponsors
          </Link>
        </div>
      
      </div>
    </nav>
  );
}