import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const CategoryCard = ({ categoryData }) => {

    const Icon = categoryData.icon;

    return (
        <div className='group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${categoryData.color}`}>
                <Icon />
            </div>
            <h3
                className='mt-6 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition'
            >{categoryData.title}</h3>

            <p
                className='mt-2 text-gray-500'
            >{categoryData.courses} Courses</p>


            <div className="flex items-center justify-between mt-8">

                <span
                    className='text-sm font-medium text-gray-400'
                >Explore</span>

                <div className="w-10 h-10 rounded-full bg-gray-100 
                flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
