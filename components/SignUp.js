import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
export default function FAQ() {
    
  const toggle=()=>{
    document.getElementsByClassName("register")[0].style.display="block";
  }
  return (
    <div id="signup" className="py-5 justify-center px-3 space-y-5 items-center ">
    <div className="text heading"> 
        <h1
          className=" text-center md:text-[4vw] text-[10vw] faq-heading heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          SIGN UP
        </h1>
      </div>
     

      
      <div className='flex flex-col text-white md:text-[1.5vw] text-[3.5vw]'>
  <h2>United Hacks is an online event. Even if you are not interested in submitting a project, still feel free
    to sign up in order to access workshops and network with our community. In order to sign up, please follow
    the instructions below.</h2>

  <ol className="list-decimal ml-6 mt-4">
    <li>Click on <b>Register</b> button below & fill out form</li>
    <li>Sign up on <a href="https://unitedhacksv2.devpost.com" className="underline text-blue-500">Devpost</a></li>
    <li>Join <a href="https://discord.gg/hackunited" className="underline text-blue-500">discord.gg/hackunited</a></li>
  </ol>
</div>

<div className="flex-col w-full">
  <button onClick={toggle} className="inline-block button font-bold text-black px-12 py-4 leading-none border rounded-full bg-[#DF6A50] text-xl border-black mt-4 lg:mt-0">
    Register
  </button>
</div>

        </div>
     
  )
}
