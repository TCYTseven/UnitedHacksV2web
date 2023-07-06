import { useEffect } from "react";

export default function Expect() {
  useEffect(() => {
      

    function reveal() {
      var reveals = document.querySelectorAll(".circle");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          reveals[i].classList.add("scale");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <>
     


      <div id="explore" className="min-h-screen justify-center items-center flex flex-col mt-3 mb-24">
      
        <div className="text heading pt-[100px]">
          <h1
            className=" text-center md:text-[4vw] text-[10vw]  expect-heading text text--blocks"
            data-scroll="out"
            data-splitting=""
          >
            What To Expect?
          </h1>
        </div>
        <div className="md:mt-24  md:ml-0 justify-center mt-0 flex-col flex  space-x-0 md:space-x-[30vw]">
          <div className="flex circle circle1 w-[85vw] h-[85vw] md:w-[39vw] md:h-[39vw] rounded-full text-center items-center justify-center  flex-col">
            <h2 className="md:text-[2vw]  w-[80%]  text-[5vw] text-[#DF6A50] font-[500]">
              Learn More than Just Tech
            </h2>
            <h3 className="text-white  w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
          <div className="flex ml-0 md:ml-16 md:mb-32 lg:mb-0 lg:ml-0 mb-0 circle circle2 md:h-[39vw] rounded-full md:mt-[-15vh] text-center items-center justify-center w-[85vw] h-[85vw] md:w-[39vw] flex-col">
            <h2 className="md:text-[2vw] w-[80%] text-[6vw] text-[#DF6A50] font-[500]">
              Project Showcase
            </h2>
            <h3 className="text-white w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
        </div>
        <div className=" flex-col  md:ml-0 flex  space-x-0 md:space-x-[30vw]">
          <div className="flex circle circle3 md:h-[39vw] rounded-full md:mt-[-25vh] text-center items-center justify-center w-[85vw] h-[85vw] md:w-[39vw] flex-col">
            <h2 className="md:text-[2vw] w-[80%] text-[6vw] text-[#DF6A50] font-[500]">
              Cash Prizes{" "}
            </h2>
            <h3 className="text-white w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
          <div className="flex circle circle4 md:h-[39vw] rounded-full md:mt-[-15vh] text-center items-center justify-center w-[85vw] h-[85vw] md:w-[39vw] flex-col">
            <h2 className="md:text-[2vw] w-[80%] text-[6vw] text-[#DF6A50] font-[500]">
              Expert Judges{" "}
            </h2>
            <h3 className="text-white w-[80%] md:text-[1vw] text-center md:leading-normal leading-8  text-[3vw]  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
