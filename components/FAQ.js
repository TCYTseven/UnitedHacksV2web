import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
export default function FAQ() {
    const faqs = [
        {
          question: 'What is a hackathon?',
          answer: 'A hackathon is a collaborative event where many people come together to collaborate and compete using computer programming.          ',
        },
        {
          question: 'Can I join as a beginner?',
          answer: 'Of course! We will provide more resources to help you build your project.',
        },
        {
          question: 'Where is the workshop schedule?',
          answer: 'The workshop schedule is avalible in our discord!.',
        }, 
        {
            question: 'Do I have to pay to enter?',
            answer: 'Nope! Our hackathon is completely free to compete in.',
          }, {
            question: 'How does finding a team work?',
            answer: 'You can choose your own team members, or work solo. Maximum team size is 4. When submitting your project on devpost, make sure to include all team members.',
          }, {
            question: 'How do I register?',
            answer: 
              <>
                To register, start off by clicking "Register" at the top of the website. After filling out that form, go to{' '}
                <a style={{color: 'deepskyblue'}} href="https://unitedhacks23.devpost.com/">Devpost</a> and sign up there! Also, don't forget to join our{' '}
                <a style={{color: 'deepskyblue'}} href="https://discord.gg/hackunited">Discord</a>.
              </>
          }, {
            question: 'What do I submit?',
            answer: 'At the end of the hacking period, on devpost submit a public github repository, a video explaining and demonstrating your project, and a short explanation of your project.',
          },
          {
            question: 'What time zone is this based in?',
            answer: 'We are based in EST, however you can compete in any time zone.',
          },
          {
            question: 'Do we have to submit a project to register?',
            answer: 'Nope! Feel free to register just to browse our workshops and resources.',
          },
          {
            question: 'When is the registration deadline?',
            answer: 'August 4th, 2023 at 4:30pm EST.',
          },
          {
            question: 'What if im not interested in coding?',
            answer: 'This hackathon is a space to get interested. As long as you like to solve problems, you are more then welcome to attend our hackathon to learn and connect with an encouraging community.',
          },
          {
            question: 'Who is hosting this hackathon?',
            answer: 'United Hacks is a hackathon hosted by Hack United, a non-profit organization founded by teens on a mission to provide a collaborative environment where innovators of all backgrounds can learn and grow together.',
          },
          {
            question: 'I have a different question.',
            answer: 'Join our discord and make a ticket! We will get back to you as soon as possible.',
          },
          
        // Add more questions and answers as needed
      ];
  return (
    <div id="faq" className="min-h-screen justify-center items-center mt-3">
    <div className="text heading"> 
        <h1
          className=" text-center md:text-[4vw] text-[10vw] faq-heading heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Frequently Asked
        </h1>
      </div>
      <Accordion className='mb-10 p-5 text-white '>
      {faqs.map((faq, index) => (
        <AccordionItem   key={index}>
          <AccordionItemButton >{faq.question}</AccordionItemButton>
          <AccordionItemPanel>{faq.answer}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  )
}
