import React from "react";
import { CiCircleChevDown } from "react-icons/ci";
import './cardStyle.scss'

const card = () => {
  const questions=[
    {
      question:"How does Sass world makes money?"
    },
    {
      question:"Can i sell already made solutions?"
    },
    {
      question:"what is the top rates program?"
    },
    {
      question:"Is sass World is geniune?"
    },
    {
      question:"How does Sass world works than other?"
    },
  ]
  return (
    <div>
      <div className="">
      {questions.map((questions) => (
         <div className="faq_card">
         <p>{questions.question}</p>
         <CiCircleChevDown />
         </div>
      ))}

      </div>
    </div>
  );
};

export default card;
