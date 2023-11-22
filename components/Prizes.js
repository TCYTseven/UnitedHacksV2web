import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { css } from "styled-components";

export default function Prizes() {
  const data = [
    {
      title: "Schedule",
      description:
        "The United Hacks opening ceremony is scheduled to take place on January 12th at 8pm EST. Following that, participants can engage in hacking activities, workshops, games, and more until January 14th at 12pm EST, which is the deadline for submitting all projects on devpost. Judging will then commence, and the closing ceremony, during which the winners will be announced, will be held on January 14th at 8 PM EST. The schedule for workshops and events throughout this two-day marathon will be released on January 1st, 2024. Stay tuned for updates!",
      link: "https://hackunited.org/#comingsoon",
      linktitle: "Hackathon Schedule",
    },
    {
      title: "Judges",
      description:
        "Our hackathon is evaluated by industry professionals spanning Engineering, Software Engineering, Business, and the medical industry. These experts not only assess projects and offer valuable feedback but also bring their expertise to gauge the potential impact and transformative capabilities of each endeavor. In addition to industry professionals, we also have high school/college judges participating. Even if you're not submitting a project, you can still interact with our diverse panel of judges throughout the event!",
      link: "https://unitedhacks23.devpost.com/#judges",
      linktitle: "View Judges",
    },
    {
      title: "Theme",
      description:
        "United Hacks is a platform where innovators unleash their creativity without any limitations. If competing in the GENERAL track, participants have the freedom to explore diverse topics—from accessibility to mental health, and beyond, nurturing the potential of your ideas! This year, our theme is Resolution, mirroring New Year's resolutions—initiatives promoting self-improvement and goal achievement. While we encourage projects related to resolution, it's not obligatory to qualify for prizes. Apart from this prize track, additional awards await across various categories. For more details, check out our Devpost page.",
    },
    {
      title: "Rules",
      description: `• You must be of ages 13+ and a high school or college student.\n• Your project must be original, it may not be copied from another source.\n• You may not use code written previous to this hackathon.\n• Your team may have up to 4 people, although you may work individually as well.\n• You must submit your project on time.\n• Your entry must be in English\n • You have to sign up on Devpost and Our Website. Joining the Discord is recommended.\n• You must follow the MLH`,
      link: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
      linktitle: "Code of Conduct",
    },    
  ];

  return (
    <div
      id="information"
      className="min-h-screen justify-center items-center mt-3 mb-24"
    >
      <div className="text heading pt-[100px]">
        <h1
          className=" text-center md:text-[3vw] text-[10vw] prizes-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Information
        </h1>
      </div>
      <div className="mt-24    ">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={4000}
          centerMode={false}
          autoPlay={true}
          className="w-full gap-3 flex flex-row"
          containerClass="container-with-dots"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite={true}
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
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 1004,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
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
          {data.map((i, e) => {
            return (
              <div className="flex rounded-[50px] mx-3 gradient-box shadow shadow-black overflow-hidden h-[140vw] md:h-[35vw] flex-col flex-grow items-center">
                <h2 className="md:text-[3vw]    text-[7vw] text-[#DF6A50] font-[500]">
                  {i.title}
                </h2>
                <p className="text-white   md:text-[1vw]  p-6  text-[3.5w] ">
                  {i.description.split("\n").map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}

                  {i.link && (
                    <a
                      href={i.link}
                      style={{
                        textDecoration: "underline",
                        color: "deepskyblue",
                      }}
                    >
                      {i.linktitle}
                    </a>
                  )}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
