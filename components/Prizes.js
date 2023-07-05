
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Prizes() {
    
  return (
    <div id="prizes" className="min-h-screen justify-center items-center mt-3 pb-[100px]">
    <div className="text heading pt-[100px]"> 
        <h1
          className=" text-center  prizes-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Prizes
        </h1>
      </div>
      <div className="mt-24 justify-center items-center flex-col flex  ">
      <Carousel
            className=" w-full h-auto "
            showIndicators={false} 
          interval={2000}
            showStatus={false}
            useKeyboardArrows={true}
            swipeable={true}
            thumbWidth={600}
            showThumbs={false}
            
            autoPlay={true}
            infiniteLoop={true}
          >

            <div className='flex flex-col flex-grow justify-center items-center bg-gradient-to-r from-indigo-800 w-full h-[700px] p-8'> <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Learn More than Just Tech
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
              
            </h3></div>
            
            <div className='flex flex-col flex-grow justify-center items-center bg-gradient-to-r from-indigo-800 w-full h-[700px] p-8'> <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Learn More than Just Tech
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
              
            </h3></div>
            
            <div className='flex flex-col flex-grow justify-center items-center bg-gradient-to-r from-indigo-800 w-full h-[700px] p-8'> <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Learn More than Just Tech
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
              
            </h3></div>
            
            <div className='flex flex-col flex-grow justify-center items-center bg-gradient-to-r from-indigo-800 w-full h-[700px] p-8'> <h2 className="text-[42px] text-[#DF6A50] font-[500]">
              Learn More than Just Tech
            </h2>
            <h3 className="text-white w-[70%] mt-3 text-2xl  break-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deserunt veniam, harum dolor voluptas perspiciatis aut veritatis
              
            </h3></div>
            
          
          
          </Carousel>
      </div>
    </div>
  )
}
