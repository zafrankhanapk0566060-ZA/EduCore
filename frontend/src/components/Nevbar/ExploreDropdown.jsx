import React, { useState } from 'react'
import { ChevronDown } from "lucide-react";


const ExploreDropdown = ({ categories }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >




        <button
          className="hidden md:flex items-center gap-2 py-7 text-base hover:text-blue-600 transition"
        >
          Explore
          <ChevronDown size={18} />

        </button>


        {
          isOpen && (
            <div
              className="absolute top-full left-0 mt-0 w-72 bg-white rounded-xl shadow-xl z-50 border border-gray-200">
              {categories?.map((item) => (
                <button
                  key={item.id}
                  className="flex w-full items-center px-5 py-3 text-left hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )
        }
      </div>
    </>
  )
}

export default ExploreDropdown