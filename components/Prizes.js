
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Prizes() {
    
  return (
    <div id="information" className="min-h-screen justify-center items-center mt-3 pb-[100px]">
    <div className="text heading pt-[100px]"> 
        <h1
          className=" text-center md:text-[4vw] text-[10vw] prizes-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Information
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

            <div className='flex rounded-[50px]    border-black border-[2px]  flex-col flex-grow justify-center  items-center bg-gradient-to-r from-[#3e158a] w-full  h-[120vw] md:h-[40vw] p-8'> <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Schedule
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
            The United Hacks opening ceremony is scheduled to take place on August 4th at 5 PM EST. Following that, participants can engage in hacking activities, workshops, games, and more until August 6th at 12 PM EST, which is the deadline for submitting all projects on devpost. Judging will then commence, and the closing ceremony, during which the winners will be announced, will be held on August 6th at 8 PM EST. The schedule for workshops and events throughout this two-day marathon will be released on August 1st, 2023. Stay tuned for updates!
            <br></br>
            <br></br>
            View our <a href="https://hackunited.org/#comingsoon" style={{textDecoration: "underline", color: "deepskyblue"}}>Hackathon Schedule</a>               
            </h3></div>
            
            <div className='flex rounded-[50px]  border-black border-[2px]  flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#3e158a] w-full  h-[120vw] md:h-[40vw] p-8'> <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Workshops
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
            United Hacks offers a variety of events throughout the hacking period, providing hackers with opportunities to learn and take breaks from constant coding. While the full workshop schedule will be released on August 1st, 2023, you can expect guest speakers from renowned FAANG companies, engaging games with exciting prizes, discussions on the future of technology, and even chances to enhance your professional digital presence. Our events go beyond teaching basic mechanical skills; instead, our hosts, who are either teenagers or industry professionals, will guide you on developing a thoughtful and strategic mindset.              
            </h3></div>
            
            <div className='flex rounded-[50px]  border-black border-[2px]  flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#3e158a] w-full  h-[120vw] md:h-[40vw] p-8'> <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Theme
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
            United Hacks is a hackathon with the purpose of empowering innovators to build anything they desire. Participants can choose any topic they want, ranging from accessibility to mental health to climate change, and beyond. We are eager to witness the potential of your creations! While United Hacks offers two main tracks, a general category and a mental health theme, we encourage you to develop a project related to mental health. However, it is not mandatory, as there will be prizes for both tracks. In addition to these two main tracks, we also offer awards for various miscellaneous categories. For further information, please refer to our devpost page.
            </h3></div>
            
            <div className='flex rounded-[50px]  border-black border-[2px]  flex-col flex-grow justify-center items-center bg-gradient-to-r from-[#3e158a] w-full  h-[120vw] md:h-[40vw] p-8'> <h2 className="md:text-[3.5vw]    text-[6vw] text-[#DF6A50] font-[500]">
              Rules
            </h2>
            <h3 className="text-white   md:text-[1.5vw] text-center md:leading-normal leading-8  text-[3.5w]  break-normal">
            <ul style={{ listStyleType: 'none', padding: '15px' }}>
  <li style={{ marginBottom: '15px' }}>• You must be of ages 13+ and a high school or college student.</li>
  <li style={{ marginBottom: '15px' }}>• Your project must be original, it may not be directly copied from another source.</li>
  <li style={{ marginBottom: '15px' }}>• You may not use code written previous to this hackathon.</li>
  <li style={{ marginBottom: '15px' }}>• Your team may have up to 4 people, although you may work individually as well.</li>
  <li style={{ marginBottom: '15px' }}>• You must submit your project on time.</li>
  <li style={{ marginBottom: '15px' }}>• Your entry must be in English.</li>
  <li style={{ marginBottom: '15px' }}>• You have to sign up on Devpost and Our Website. Joining the Discord is recommended.</li>
  <li style={{ marginBottom: '15px' }}>• You must follow the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" style={{textDecoration: "underline", color: "deepskyblue"}}>Code of Conduct</a> .</li>

</ul>



            </h3></div>
            
          
          
          </Carousel>
      </div>
    </div>
  )
}
