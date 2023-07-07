import { useState } from "react";
import Loader from "./Loader";
import { Checkbox } from "@nextui-org/react";

export default function Registeration({ reg }) {
  const [isloading, setIsloading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const toggle = () => {
    document.getElementsByClassName("register")[0].style.display = "none";
  };
  const [issubscribed, setIssubscribed] = useState(false);
  const [isopen, setIsopen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [resume, setResume] = useState("");
  const [first, setFirst] = useState(null);
  const handlesubscribe = () => {
    if (issubscribed  === true) {
      setIssubscribed(false);
    } else {
      setIssubscribed(true);
    }
  };
  const handleopen = () => {
    if (isopen  === true) {
      setIsopen(false);
    } else {
      console.log("setted to open false")
      setIsopen(true);
    }
  };
  const handlefirst = () => {
    if(first ===true){
      setFirst(null);
    }
    else{
      
      setFirst(true);
    }
 
  };
  const handlenotfirst = () => {
    if(first ===false){
      setFirst(null);
    }
    else{
      
      setFirst(false);
    }
      
    
  };
  const handleSubmit = async (e) => {
    setPrompt("HACK UNITED");
    setIsloading(true);
    e.preventDefault();
    const form = {
      name,
      email,
      username,
      country,
      linkedin,
      resume,
      issubscribed,
      isopen,
      first,
    };
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setName("");
    setEmail("");
    setCountry("");
    setLinkedin("");
    setUsername("");
    setResume("");
    setIsopen(false);
    setIssubscribed(false);
  
    setFirst(false);
    setTimeout(() => {
      reg(true);

      setIsloading(false);
    }, 2000);
  };
  return (
    <>
      {isloading ? (
        <Loader message={prompt} />
      ) : (
        <>
        
          <div
            className="flex flex-col overflow-hidden fade
    items-center register justify-center align-center bg-[#472da779] h-screen fixed w-full z-[999999]  "
          >
            <div className="flex bottomtotop flex-col mt-10 p-8 form mx-auto my-auto md:w-3/5 rounded-2xl ">
              <div className="cursor-pointer absolute md:right-[22vw]  right-3">
                <svg
                  width="36"
                  onClick={toggle}
                  className="h-[5vw] md:h-[3vw]"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.0672 30.6744C36.3109 31.9193 36.3109 33.8559 35.0672 35.1009C34.4453 35.7233 33.6852 36 32.856 36C32.0269 36 31.2668 35.7233 30.6449 35.1009L18 22.4438L5.35509 35.1009C4.73321 35.7233 3.97313 36 3.14395 36C2.31478 36 1.5547 35.7233 0.932821 35.1009C-0.310941 33.8559 -0.310941 31.9193 0.932821 30.6744L13.5777 18.0173L0.932821 5.36023C-0.310941 4.11527 -0.310941 2.17867 0.932821 0.933718C2.17658 -0.311239 4.11133 -0.311239 5.35509 0.933718L18 13.5908L30.6449 0.933718C31.8887 -0.311239 33.8234 -0.311239 35.0672 0.933718C36.3109 2.17867 36.3109 4.11527 35.0672 5.36023L22.4223 18.0173L35.0672 30.6744Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h1 className="md:text-[3vw] font-bold text-center text-[8vw]  text-[#DF6A50] hackunited ">
                Register Your Spot
              </h1>

              <form
                className="flex flex-col  flex-wrap justify-center"
                onSubmit={handleSubmit}
              >
                <div className="w-full flex flex-col  mb-5 mt-5">
                  <label
                    required={true}
                    htmlFor="name"
                    className="text-white  md:text-[1.1vw]    text-[3vw]  "
                  >
                    Enter Full Name
                  </label>
                  <input
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
                    id="name"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="w-full flex flex-col  mb-5 mt-5">
                  <label
                    htmlFor="email"
                    className="text-white  md:text-[1.1vw]    text-[3vw]  "
                  >
                    Enter Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    type="email"
                    name="email"
                    className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="w-full flex flex-col  mb-5 mt-5">
                  <label
                    required={true}
                    htmlFor="country"
                    className="text-white  md:text-[1.1vw]    text-[3vw]  "
                  >
                    Enter Country
                  </label>
                  <input
                    value={country}
                    required={true}
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    name="country"
                    className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
                    id="country"
                    placeholder="Your Country"
                  />
                </div>
                <div className="w-full flex flex-col  mb-5 mt-5">
                  <label
                    htmlFor="linkedin"
                    className="text-white  md:text-[1.1vw]    text-[3vw]  "
                  >
                    Enter Linkedin URL
                  </label>
                  <input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    type="text"
                    name="linkedin"
                    className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
                    id="linkedin"
                    placeholder="Optional"
                  />
                </div>
                <div className="w-full flex flex-col  mb-5 mt-5">
                  <label
                    htmlFor="resume"
                    className="text-white  md:text-[1.1vw]    text-[3vw]  "
                  >
                    Enter Resume URL
                  </label>
                  <input
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    type="text"
                    name="resume"
                    className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
                    id="resume"
                    placeholder="Optional"
                  />
                </div>
                <div className="w-full flex flex-col  mb-5 mt-5">
                  <label
                    required={true}
                    htmlFor="username"
                    className="text-white  md:text-[1.1vw]    text-[3vw]  "
                  >
                    Enter DevPost Username
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
                    id="username"
                    placeholder="Your DevPost Username"
                  />
                </div>

                <div className="flex text-white flex-col mb-5">
                  <label className="text-gray-500  md:text-[1.1vw] mt-5   text-[3vw]  ">
                    This is  <span className="text-white border-b-2"> {first===true? "my First" : first===false? "not my First" : "..."}</span> hackathon
                  </label>
                  <div className="flex flex-row ">
                    <Checkbox className="mb-5 mt-5 px-5 rounded-3xl bg-[#1212136c]  py-5"
                    isChecked={first}
                    onChange={handlefirst} 
                    isDisabled={first===false? true: ""}
                      size="md"
                      color="gradient"
                      
                      labelColor="warning"
                    >
                     My First Hackathon
                    </Checkbox>
                    <Checkbox className="mb-5 ml-5 mt-5 px-5 rounded-3xl bg-[#1212136c]  py-5"
                      size="md" 
                      isChecked={first} isDisabled={first===true? true: ""}
                      color="gradient"
                      onChange={handlenotfirst}
                      labelColor="warning"
                 
                    >
                     Not My First Hackathon
                    </Checkbox>
                  </div>
                  <div>

                  <Checkbox className="px-5 rounded-3xl bg-[#1212136c]  py-5"
                    size="md" 
                    isChecked={issubscribed}
                    color="gradient"
                    onChange={handlesubscribe}
                    labelColor="warning"
                  >
                    I consent to subscribing to Hack United's mailing list and
                    receiving promotional emails.
                  </Checkbox>
                  <Checkbox className="px-5 mt-5 rounded-3xl bg-[#1212136c]  py-5"
                    size="md"
                    color="gradient"
                    defaultChecked   isSelected={true}
                 
                    isRequired
                    labelColor="warning"
                  >
                    By checking this box, I confirm that I am at least 13 years
                    old and either enrolled in college or attending high school.
                  </Checkbox>
                  <Checkbox className="px-5 mt-5 rounded-3xl bg-[#1212136c]  py-5"
                    size="md"
                    color="gradient"
                    onChange={handleopen}
                    isChecked={isopen}
                    labelColor="warning"
                  >
                    If requested, I consent to having my contact information
                    shared to sponsors of the hackathon.
                  </Checkbox>
                  <Checkbox className="px-5 mt-5 rounded-3xl bg-[#1212136c]  py-5"
                    size="md"
                   
                    color="gradient"
                    defaultChecked
                    isRequired   isSelected={true}
                    labelColor="warning"
                  >
                    I have carefully read and understand the rules of the
                    hackathon, and I agree to abide by them.
                  </Checkbox>
                  </div>
                </div>
                <h3 className="text-gray-300  md:text-[1.1vw]  text-center mb-5 mt-5 text-[3vw]  "> ⚠️ In order to fully register you need to be in our discord and you need to register on devpost</h3>
                <button
                      type="submit"
                      className="inline-block button px-12 py-4 leading-none border rounded-full font-bold text-black bg-[#DF6A50] text-xl border-black mt-4 lg:mt-0"
                    >
                      Submit
                    </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
