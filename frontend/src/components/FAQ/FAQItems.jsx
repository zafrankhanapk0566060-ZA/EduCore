import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import faqData from '../../data/FAQData';


const FAQItems = ({ question, answer }) => {

  const [open, setOpen] = useState(false)


  return (
    <div className="border-b border-gray-300 py-2">
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center cursor-pointer"
      >
        {
          open
            ? <FiChevronUp />
            : <FiChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`} />
        }
        <h1 className="text-lg font-semibold py-3 px-4 rounded-lg w-full text-gray-900 hover:bg-sky-100">{question}</h1>
      </div>

      {
        open && (
          <div>
            <h4 className="text-gray-600 py-6 leading-7">{answer}</h4>
          </div>
        )
      }


    </div>
  )
}

export default FAQItems
