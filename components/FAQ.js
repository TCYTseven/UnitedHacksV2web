import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
export default function FAQ() {
    const faqs = [
        {
          question: 'What is your return policy?',
          answer: 'We accept returns within 30 days of purchase.',
        },
        {
          question: 'How do I track my order?',
          answer: 'You will receive a tracking number via email when your order ships.',
        },
        {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          }, {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          }, {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          }, {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          },
          {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          },
          {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          },
          {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          },
          {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          },
          {
            question: 'How do I track my order?',
            answer: 'You will receive a tracking number via email when your order ships.',
          },
          
        // Add more questions and answers as needed
      ];
  return (
    <div className="min-h-screen justify-center items-center mt-3">
    <div className="text heading"> 
        <h1
          className=" text-center  faq-heading text text--blocks"
          data-scroll="out"
          data-splitting=""
        >
          Frequently Asked
        </h1>
      </div>
      <Accordion className='mt-10 p-5 text-white bg-gradient-to-r from-indigo-800'>
      {faqs.map((faq, index) => (
        <AccordionItem  key={index}>
          <AccordionItemButton >{faq.question}</AccordionItemButton>
          <AccordionItemPanel>{faq.answer}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  )
}
