import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";


const CourseHeader = ({ showAll, setShowAll }) => {
    return (
        <div className='space-y-2'>
            <h1 className='text-center text-3xl font-semibold text-gray-900'>Career skills that work</h1>
            <p className='text-center font-semibold'>Learn job-ready skills from top Universities. Learn job-ready skills from top Universities. </p>
            <div className="flex flex-row justify-between">
                <button className='bg-[#0056D2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0046AE] transition-all duration-300'>Get 40% Off</button>

                <button
                onClick={()=> setShowAll(true)}
                    className='border border-[#0056D2] text-[#0056D2] px-8 py-3 rounded-lg font-medium flex items-center gap-1 hover:bg-blue-50 transition-all duration-300'

                >
                    View All
                    <BsArrowRightShort /></button>
            </div>
        </div>
    )
}

export default CourseHeader
