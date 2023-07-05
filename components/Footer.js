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

              <Link href="/">
                <Image
                  width={110}
                  height={110}
                  src="/earth.png"
                  className="absolute mt-[-5px] mr-1  "
                  alt="Ownboon Logo"
                />
                <h1 className="text-3xl ml-[95px]  text-center text-[#DF6A50] hackunited text-savapro">
                  HACK
                </h1>
                <h1 className="text-xl ml-[95px]  text-center text-[#DF6A50] hackunited text-savapro">
                  UNITED
                </h1>
              </Link>
            </div>
              <div className="pt-[1vh]  text-[18px]">
                <div className="flex flex-row text-3xl space-x-4 mt-5">
                  <Link href="https://www.linkedin.com/company/ownboon">
                    <FontAwesomeIcon color={"white"} icon={faLinkedin} />
                  </Link>
                  <Link href="https://instagram.com/OwnBoon">
                    <FontAwesomeIcon color={"white"} icon={faInstagram} />
                  </Link>
                  <Link href="https://twitter.com/OwnBoonHQ">
                    <FontAwesomeIcon color={"white"} icon={faTwitter} />
                  </Link>
                  <Link href="https://discord.gg/nxeUX3Uufn">
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
                    <Link href="/#about" className="hover:underline ">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className=" cursor-not-allowed">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className=" cursor-not-allowed">
                      Privacy
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="https://discord.gg/KBNaHgn287"
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
                      href="https://discord.gg/nxeUX3Uufn"
                      className="hover:underline"
                    >
                      Join our community
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="mailto:team@ownboon.com"
                      className="hover:underline"
                    >
                      Email Us
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
