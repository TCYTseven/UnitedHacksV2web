import Expect from "@/components/Expect";
import Explore from "@/components/Explore";
import FAQ from "@/components/FAQ";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Prizes from "@/components/Prizes";
import Registeration from "@/components/Registeration";
import Sponsers from "@/components/Sponsers";
import Head from "next/head";
import { ibmPlexMono } from "../font";

import { useState } from "react";
import { useEffect } from "react";
import Toast from "@/components/Toast";
export default function Home() {
  const [hasregistered, setHasregistered] = useState(false)

useEffect(() => {
  
  setHasregistered(false)
}, [])
if(hasregistered===true){
  setTimeout(() => {
    setHasregistered(false)
  }, 2500);
}
  return (
    

    <>
    <Head>
    <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="hack united,hack united company, hack united, hack united, hack united hackathon, hack united code, hack united help, hack united sponsor, hack united explore, hack united  hack united linkedin, hack united github"
        />
      <title>Hack United </title>
      <meta name="description" content="Hack United is a non-profit organization founded by teenagers with a passion for programming and technology. Our mission is to inspire and educate the next generation of innovators through education, collaboration, and events. Our workshops and hackathons provide a unique opportunity for participants to learn new skills, collaborate with like-minded individuals, and create innovative solutions to real-world problems. With a focus on inclusivity and accessibility, we strive to make technology accessible to everyone, regardless of their background or experience level." />
         <link rel="icon" href="../public/earth.png" type="image/x-icon"/>
         <meta property="og:image" content="../public/earth.png" />
        <meta name="author" content="Hack United" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
   {hasregistered ===true? 
<Toast/> : ""
   }
    <Registeration reg= {setHasregistered}/>
    
      <Navbar />
      <Hero />
      <div className="mx-auto px-2 my-auto w-full md:w-[75%] justify-center">
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

      <div className="mx-auto px-2 my-auto  w-full md:w-[75%]  justify-center">
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
      <div className="mx-auto px-2 my-auto  w-full md:w-[75%]  justify-center">
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
      <div className="mx-auto px-2 my-auto  w-full md:w-[75%]  justify-center">
        <SignUp />
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
      <div className="mx-auto px-2 my-auto  w-full md:w-[75%]  justify-center">
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
      <div className="mx-auto px-2 my-auto justify-center">
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
    </>
  );
}
