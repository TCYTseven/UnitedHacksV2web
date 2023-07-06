import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="  items-center text-white  ">
      <footer className="mt-5 mx-auto md:flex p-8 md:justify-between   md:w-[80%]">
        <div className=" w-full  p-4 py-6 lg:py-2 ">
          <div className="md:flex md:justify-between ">
            <div className="mb-6 justify-center  md:mb-0">
              <div className="ml-[-30px]">
              
                  <Image
                    width={110}
                    height={110}
                    src="/earth.png"
                    className="absolute mt-[-5px] mr-1  "
                    alt="HackUnited Logo"
                  />
                  <h1 className="text-3xl  ml-[95px]  md:text-center text-[#DF6A50] hackunited text-savapro">
                    HACK
                  </h1>
                  <h1 className="text-xl  ml-[95px]  md:text-center text-[#DF6A50] hackunited text-savapro">
                    UNITED
                  </h1>
              </div>
              
                <h3 className="text-gray-600 text-[0.9rem] mt-5 dark:text-gray-400 font-medium">EIN: 81-2908499
</h3>
              <div className="pt-[1vh]  text-[18px]">
                <div className="flex flex-row text-3xl space-x-4 ">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/hack-united"
                  >
                    <FontAwesomeIcon color={"white"} icon={faLinkedin} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/hack_united"
                  >
                    <FontAwesomeIcon color={"white"} icon={faInstagram} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/hackunited_"
                  >
                    <FontAwesomeIcon color={"white"} icon={faTwitter} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.gg/N7QgrKwQCP"
                  >
                    <FontAwesomeIcon color={"white"} icon={faDiscord} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 font-poppins sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-[1rem] font-bold text-white  ">
                  Company
                </h2>
                <ul className="text-gray-600 text-[0.9rem] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/#about"
                      className="hover:underline "
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://unitedhacks23.devpost.com/rules"
                    >
                      Hackathon Rules
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://hackunited.org/#donate"
                    >
                      Donate
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:humans@hackunited.org"
                      className="hover:underline"
                    >
                      Give feedback
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-[1rem] font-bold text-white">
                  Contact Us
                </h2>
                <ul className="dark:text-gray-400 text-[0.9rem] font-medium">
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://hackunited.org/#socialmedia"
                      className="hover:underline"
                    >
                      Join our community
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:humans@hackunited.org"
                      className="hover:underline"
                    >
                      Email Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://blog.hackunited.org/"
                      className="hover:underline"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://hackunited.org/#apply"
                      className="hover:underline"
                    >
                      Volunteer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
