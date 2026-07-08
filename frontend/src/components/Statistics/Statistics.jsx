import React from 'react'
import StatisticsHeader from './StatisticsHeader'
import StatisticsGrid from './StatisticsGrid'

const Statistics = () => {
    return (
        <div className='bg-slate-50 py-20'>
            <div className="max-w-7xl mx-auto px-6">
                <StatisticsHeader />
                <StatisticsGrid />

            </div>
        </div>
    )
}

export default Statistics
