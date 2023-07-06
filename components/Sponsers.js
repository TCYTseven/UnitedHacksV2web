import Image from "next/image";
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
        }
        else{
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
      <div className="mt-5 md:mt-24 flex-row flex-wrap flex   gap-10 justify-center items-center">
      
      <logo-slider >
      <div className="slidersponsers">
      <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
   </div>
  
  <div className="slidersponsers">
  <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
  </div>

      </logo-slider>
        
      </div>
      <div className="mt-0 md:mt-14 flex-row flex-wrap flex   gap-10 justify-center items-center">

      <logo-slider >
      <div className="slidersponsers">
      <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
   </div>
  
  <div className="slidersponsers">
  <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
        <Image src={"/sponser1.webp"} width={200} height={200}/>
  </div>

      </logo-slider>
      </div>
    </div>
  )
}
