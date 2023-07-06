import { useState } from "react";
import Loader from "./Loader";
import { toast } from "react-toastify";

export default function Registeration() {
  const [isloading, setIsloading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const toggle = () => {
    document.getElementsByClassName("register")[0].style.display = "none";
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    setPrompt("HACK UNITED")
    setIsloading(true)
    e.preventDefault()
    const form = {
      name,
      email,
      phone,
      message,
    };
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await response.json();
    alert(content)
    toast.success("Successfully Registered");
    setMessage("");
    setName("");
    setPhone("");
    setEmail("");
    setTimeout(() => {
      
      setIsloading(false)
    }, 2000);

  };

  return (
    <>
    {isloading? <Loader message={prompt}/> : 
    

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
        <h1 className="md:text-[2vw] text-[4vw]  text-[#DF6A50] hackunited ">
        
          Register Your Spot
        </h1>

        <form
          className="flex flex-col  flex-wrap justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col mt-5 mb-5">
            <label
              required={true}
              htmlFor="name"
              className="text-white  md:text-[1.1vw]    text-[3vw]  "
            >
              Enter Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full flex flex-col mt-5 mb-5">
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
          <div className="w-full flex flex-col mt-5 mb-5">
            <label
              htmlFor="phone"
              className="text-white  md:text-[1.1vw]    text-[3vw]  "
            >
              Enter Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phone"
              className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
              id="phone"
              placeholder="Your Phone"
            />
          </div>
          <div className="w-full flex flex-col mt-5 mb-5">
            <label
              htmlFor="message"
              className="text-white  md:text-[1.1vw]    text-[3vw]  "
            >
              Enter Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="p-5 mt-3 md:text-[1.1vw] text-white bg-[#0000005e]  text-[2.9vw] "
              id="message"
              placeholder="Your Message"
            />
          </div>

          <div className="flex-col flex">
            <button
              type="submit"
              className="inline-block button px-12 py-4 leading-none border rounded-full font-bold text-black bg-[#DF6A50] text-xl border-black mt-4 lg:mt-0"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  }

    </>

  );
}
