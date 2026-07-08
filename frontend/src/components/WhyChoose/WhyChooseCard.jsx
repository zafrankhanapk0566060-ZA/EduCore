import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const WhyChooseCard = ({ item }) => {

  const Icon = item.icon;
     
  return (
    <div
      className='bg-white group rounded-2xl p-8 border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'
    >

      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 ${item.color}`}>
        <Icon />
      </div>

      <h3 className='text-xl mt-6 group-hover:text-blue-600 transition font-bold'>{item.title}</h3>

      <p className='mt-3 text-gray-600 leading-7'>{item.description}</p>
      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm text-gray-500">
          Learn More
        </span>

        <div
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition"
        >
          <FaArrowRight />
        </div>

      </div>
    </div>
  )
}

export default WhyChooseCard
