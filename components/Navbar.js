
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Navbar() {
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
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
    
  return (
    <nav  style={{
        background: `${backgroundTransparacy===0? "transparent" : "black"}`,
      }} className="flex  top-0 sticky items-center justify-between flex-wrap px-3 py-3">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Image src={'/navbarlogo.png'} width={300} height={120} className="w-[160px] h-[80px]"/>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded    ">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 10a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 17a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3z"/></svg>
      </button>
    </div>
    <div className="w-full text-center block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-xl nav-mid text-white lg:flex-grow ">
        <Link scroll={false} className="block mt-4 lg:inline-block lg:mt-0 nav-link-ltr  mr-14" href="#home">
            Home
        </Link>
        <Link  scroll={false} className="block mt-4 lg:inline-block lg:mt-0  nav-link-ltr mr-14" href="#explore">
            Explore
        </Link>
        <Link scroll={false} href="#prizes" className="block mt-4 lg:inline-block nav-link-ltr lg:mt-0   mr-14">
            Prizes
        </Link>
        <Link scroll={false} className="block mt-4 lg:inline-block lg:mt-0  nav-link-ltr" href="#sponsors">
         
            Sponsors
        </Link>
      </div>
      <div className='flex-col flex'>
        <button className="inline-block button  px-12  py-4 leading-none border rounded-full text-black bg-[#DF6A50] text-xl border-black  mt-4 lg:mt-0 ">
          Register
        </button>
      </div>
        <button className="absolute button inline-block px-12  py-4 leading-none border rounded-full text-black bg-purple-600 text-xl border-black  mt-4 lg:mt-0">
          Discord
        </button>
    </div>
  </nav>
  )
}
