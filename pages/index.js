import Expect from "@/components/Expect";
import Explore from "@/components/Explore";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Prizes from "@/components/Prizes";
import Sponsers from "@/components/Sponsers";

import { ibmPlexMono } from "../font";

export default function Home() {
 
  
  return (
    

    <div >
      <Navbar />
      <Hero />
      <div className="mx-auto my-auto w-full md:w-[65%] justify-center">
        <Explore />
      </div>
      <div className="marquee">
        <p
          className="text-[#400090]"
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
        >
          1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0
          1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1
          0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1
          0 1 0{" "}
        </p>
      </div>

      <div className="mx-auto my-auto w-full md:w-[65%] justify-center">
        <Expect />
      </div>
      <div className="marquee">
        <p
          className="text-[#400090]"
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
        >
          1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0
          1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1
          0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1
          0 1 0{" "}
        </p>
      </div>
      <div className="mx-auto my-auto w-full md:w-[65%] justify-center">
        <Prizes />
      </div>
      <div className="marquee">
        <p
          className="text-[#400090]"
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
        >
          1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0
          1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1
          0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1
          0 1 0{" "}
        </p>
      </div>
      <div className="mx-auto my-auto w-full md:w-[65%] justify-center">
        <FAQ />
      </div>
      <div className="marquee">
        <p
          className="text-[#400090]"
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
        >
          1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0
          1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1
          0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1
          0 1 0{" "}
        </p>
      </div>
      <div className="mx-auto my-auto justify-center">
        <Sponsers />
      </div>
      <div className="marquee ">
        <p
          className="text-[#400090]"
          style={{ fontFamily: `${ibmPlexMono.style.fontFamily}` }}
        >
          1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0
          1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 1 0 0 1 0 1 0 1
          0 1 0 1 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1
          0 1 0{" "}
        </p>
      </div>
      <Footer/>
    </div>

      
     
    
  );
}
