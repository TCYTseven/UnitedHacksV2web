import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Prizes() {
 
  return (
    <div
      id="information"
      className="min-h-screen justify-center items-center mt-3 mb-24"
    >
      <div className="text heading pt-[100px]">
        <h1
          className=" text-center md:text-[4vw] text-[10vw] prizes-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Information
        </h1>
      </div>
      <div className="mt-24  justify-center items-center flex-col flex  ">
      <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
          <div className="flex rounded-[50px]  overflow-hidden  border-black border-[2px]  flex-col flex-grow justify-center  items-center bg-gradient-to-r from-[#3e158a] w-full md:h-[40vw] p-8">
        
            <h2 className="md:text-[4vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Schedule
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
              The United Hacks opening ceremony is scheduled to take place on
              August 4th at 5 PM EST. Following that, participants can engage in
              hacking activities, workshops, games, and more until August 6th at
              12 PM EST, which is the deadline for submitting all projects on
              devpost. Judging will then commence, and the closing ceremony,
              during which the winners will be announced, will be held on August
              6th at 8 PM EST. The schedule for workshops and events throughout
              this two-day marathon will be released on August 1st, 2023. Stay
              tuned for updates!
              <br></br>
              <br></br>
              View our{" "}
              <a
                href="https://hackunited.org/#comingsoon"
                style={{ textDecoration: "underline", color: "deepskyblue" }}
              >
                Hackathon Schedule
              </a>
            </h3>
          </div>

          <div className="flex rounded-[50px] overflow-hidden border-black border-[2px]  flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#3e158a] w-full   md:h-[40vw] p-8">
            {" "}
            <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Judges
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
            Our hackathon is judged by industry professionals, who will also critique your projects and provide feedback. Our judges come from various fields such as Engineering, Software Engineering, Business, or the medical industry. As the theme for this year's hackathon is mental health, we aim to evaluate all mental health-related projects with the assistance of a genuine medical professional. This expert will be able to assess the potential impact of the projects in making a difference. Even if you don't submit a project, you may see our judges around!
            </h3>
          </div>

          <div className="flex rounded-[50px] overflow-hidden border-black border-[2px]  flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#3e158a] w-full   md:h-[40vw] p-8">
            {" "}
            <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Theme
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
              United Hacks is a hackathon with the purpose of empowering
              innovators to build anything they desire. Participants can choose
              any topic they want, ranging from accessibility to mental health
              to climate change, and beyond. We are eager to witness the
              potential of your creations! While United Hacks offers two main
              tracks, a general category and a mental health theme, we encourage
              you to develop a project related to mental health. However, it is
              not mandatory, as there will be prizes for both tracks. In
              addition to these two main tracks, we also offer awards for
              various miscellaneous categories. For further information, please
              refer to our devpost page.
            </h3>
          </div>

          <div className="flex rounded-[50px] overflow-hidden justify-center  border-black border-[2px]  flex-col flex-grow   bg-gradient-to-r from-[#3e158a] w-full   md:h-[40vw] p-8">
            <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Rules
            </h2>
            <h3 className="text-white  text-left  md:text-[1.5vw]  md:leading-normal leading-8  text-[3.5w]  break-normal">
              <ul className={"px-3"}>
                <li className={"mb-3"}>
                  • You must be of ages 13+ and a high school or college
                  student.
                </li>
                <li className={"mb-3"}>
                  • Your project must be original, it may not be directly copied
                  from another source.
                </li>
                <li className={"mb-3"}>
                  • You may not use code written previous to this hackathon.
                </li>
                <li className={"mb-3"}>
                  • Your team may have up to 4 people, although you may work
                  individually as well.
                </li>
                <li className={"mb-3"}>
                  • You must submit your project on time.
                </li>
                <li className={"mb-3"}>
                  • Your entry must be in English.
                </li>
                <li className={"mb-3"}>
                  • You have to sign up on Devpost and Our Website. Joining the
                  Discord is recommended.
                </li>
                <li className={"mb-3"}>
                  • You must follow the{" "}
                  <a
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    style={{
                      textDecoration: "underline",
                      color: "deepskyblue",
                    }}
                  >
                    Code of Conduct
                  </a>{" "}
                  .
                </li>
              </ul>
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
