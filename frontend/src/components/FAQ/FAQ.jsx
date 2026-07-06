import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import FAQItems from './FAQItems'
import faqData from '../../data/FAQData'

const FAQ = () => {

  const [showAll, setShowAll] = useState(false)
  const visibleQuestion = showAll ? faqData : faqData.slice(0, 3);


  return (
    <div className='bg-white w-full py-5'>
      <h1 className="text-4xl font-semibold pl-12 my-8">
        Frequently asked questions
      </h1>

      <div className="max-w-5xl mx-auto mt-10 px-6 pt-8 rounded-lg border border-gray-300">
        {         
          visibleQuestion.map((faq) => (
            <FAQItems
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))
        }
        <div
          className="w-full"
        >

          <div
            className="flex items-center justify-center text-center w-full mb-0 gap-2 mt-10 cursor-pointer  font-semibold hover:underline"
          >

            <button
              onClick={() => setShowAll(!showAll)}
            >

              {showAll
                ? "Show less"
                : `Show all ${faqData.length} frequently asked questions`}
            </button>

            
            {
              showAll
                ? <FiChevronUp className="text-xl" />
                : <FiChevronDown className="text-xl" />
            }

          </div>
        </div>
      </div>
      <p className='text-base text-blue-500 pl-15 mt-10'>1 - Learner Outcome Report 2025</p>

    </div>
  )
}

export default FAQ 
