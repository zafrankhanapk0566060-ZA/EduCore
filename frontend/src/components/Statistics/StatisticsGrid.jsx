import React from 'react'
import statisticsData from '../../data/statisticsData'
import StatisticsCard from './StatisticsCard'

const StatisticsGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>


            {statisticsData?.map((eachData) => (
                <StatisticsCard
                    key={eachData.id}
                    eachData={eachData}
                />
            ))}


        </div>
    )
}

export default StatisticsGrid
