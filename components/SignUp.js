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
     

      
      <div className='flex flex-col text-white  md:text-[1.5vw] text-[3.5vw]'>
        <h2>hackMHS will take place from May 19th, 5:00pm to around 8:00pm the next day.
             There will be 24 hours of hacking, food, workshops, and games. If you have any 
             questions before you sign up, feel free to reach out to us at info@hackmhs.com.</h2>
      </div>
      <div className="flex-col w-full ">
          <button onClick={toggle} className="inline-block button font-bold text-black px-12 py-4 leading-none border rounded-full  bg-[#DF6A50] text-xl border-black mt-4 lg:mt-0">
            Register
          </button>
        </div>
        </div>
     
  )
}
