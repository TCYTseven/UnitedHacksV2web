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
          <div className="z-no slidersponsers">
            <Link
              href="https://www.google.com/search?q=hackclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack Club"
                src={"/hackclub.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=art+of+problem+solving+company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="AOPS"
                src={"/aops.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=axure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Axure"
                src={"/axure.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=codiac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/codiac.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=echo3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/echo3d.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=fearedsudiotech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/fearedsudiotech.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=givemycertificate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/flight.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=interviewcake"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/interviewcake.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=leangap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/leangap.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=streamyard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/streamyard.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
          </div>

          <div className="z-no slidersponsers">
            <Link
              href="https://www.google.com/search?q=hackclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack Club"
                src={"/hackclub.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=art+of+problem+solving+company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="AOPS"
                src={"/aops.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=axure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Axure"
                src={"/axure.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=codiac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/codiac.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=echo3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/echo3d.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/xyz.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=wolfram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/wolfram.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=viewschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/vueschool.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=verbwire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/verbwire.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=swishswoosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/swishswoosh.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
          </div>
        </logo-slider>
      </div>
      <div className="mt-0 z-no md:mt-14 md:mb-16 flex-row flex-wrap flex   gap-10 justify-center items-center">
        <logo-slider>
        
        <div className="slidersponsers">
            <Link
              href="https://www.google.com/search?q=hackclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack Club"
                src={"/hackclub.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=art+of+problem+solving+company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="AOPS"
                src={"/aops.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=axure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Axure"
                src={"/axure.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=codiac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/codiac.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=echo3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/echo3d.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/xyz.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=wolfram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/wolfram.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=viewschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/vueschool.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=verbwire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/verbwire.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=swishswoosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/swishswoosh.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
          </div>
        <div className="slidersponsers">
            <Link
              href="https://www.google.com/search?q=hackclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack Club"
                src={"/hackclub.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=art+of+problem+solving+company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="AOPS"
                src={"/aops.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=axure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Axure"
                src={"/axure.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=codiac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/codiac.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=echo3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/echo3d.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/xyz.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=wolfram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/wolfram.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=viewschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/vueschool.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=verbwire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/verbwire.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://www.google.com/search?q=swishswoosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Hack United"
                src={"/swishswoosh.png"}
                className="w-[6vw] h-[11vw] md:w-[11vw] md:h-[5vw] " width={200}
                height={200}
              />
            </Link>
          </div>

        </logo-slider> 
      </div>
      <div style={{height: '1px'}}></div>
      <center>
  <h3 style={{color: "white", fontSize: "18px"}}>
    Want to sponsor us? View our <a href="https://drive.google.com/file/d/1QVr7WmvAL858uL5APvj9X6Gnl0Jf-96u/view?usp=sharing" style={{textDecoration: "underline", color: "deepskyblue"}}>Sponsorship Prospectus</a> and email <a href="mailto:humans@hackunited.org" style={{textDecoration: "underline", color: "deepskyblue"}}>humans@hackunited.org</a>!
  </h3>
  
</center>
    </div>
  );
}
