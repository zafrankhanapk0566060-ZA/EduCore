import React from 'react'
import RatingStars from './RatingStars'

const TestimonialCard = ({ item }) => {
    return (
        <div
            className={`
        rounded-3xl p-6 shadow-md 
        ${item.bg === 'black' ? 'bg-blue-500 backdrop-blur-md border border-white/10 rounded-3xl text-white' : 'bg-white text-gray-700'}
        ${item.colSpan}
        ${item.rowSpan}
    `}
        >
            <div className="flex items-center gap-3 mb-6">
                <img
                    src={item.image}
                    alt={item.name}
                    className='w-12 h-12 rounded-full'
                />
                <h1>{item.name}</h1>
            </div>

            <div className="flex items-center justify-between mb-5">

                <span className="text-sm font-semibold">
                    {item.rating}
                </span>
                <RatingStars rating={item.rating} />


            </div>


            <p className='text-base leading-6 mb-10'>
                "{item.quote}"
            </p>

        </div>
    )
}

export default TestimonialCard
