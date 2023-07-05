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
     


      <div id="explore" className="min-h-screen mt-3 ">
      
        <div className="text heading pt-[100px]">
          <h1
            className=" text-center  expect-heading text text--blocks"
            data-scroll="out"
            data-splitting=""
          >
            What To Expect?
          </h1>
        </div>
        <div className="mt-24 flex-col flex  space-x-[30vw]">
          <div className="flex circle circle1 h-[750px] rounded-full text-center items-center justify-center w-[750px] flex-col">
            <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Learn More than Just Tech
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
          <div className="flex circle circle2 h-[750px] rounded-full mt-[-15vh] text-center items-center justify-center w-[750px] flex-col">
            <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Project Showcase
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
        </div>
        <div className="mt-24 flex-col flex  space-x-[30vw]">
          <div className="flex circle circle3 h-[750px] rounded-full mt-[-25vh] text-center items-center justify-center w-[750px] flex-col">
            <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Cash Prizes{" "}
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
          <div className="flex circle circle4 h-[750px] rounded-full mt-[-15vh] text-center items-center justify-center w-[750px] flex-col">
            <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Expert Judges{" "}
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
