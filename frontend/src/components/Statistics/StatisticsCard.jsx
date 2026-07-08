import React from 'react'

const StatisticsCard = ({ eachData }) => {

    const Icon = eachData.icon

    return (
        <div className='rounded-2xl border border-gray-200 p-8 group shadow-sm hover:-translate-y-2 hover:shadow-xl bg-white transition-all duration-300'>


            <div className={`h-12 w-12 flex items-center justify-center text-2xl rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${eachData.color}`}>
                <Icon  className='group-hover:rotate-6'/>
            </div>


            <h1 className='text-4xl text-gray-900 text-center font-bold group-hover:text-blue-600 transition mt-5'>{eachData.number}</h1>

            <h3 className='text-xl mt-2 font-semibold text-gray-800'>{eachData.title}</h3>

            <p
                className='text-gray-500 mt-3 text-sm leading-6'
            >{eachData.description}</p>

        </div>
    )
}

export default StatisticsCard
