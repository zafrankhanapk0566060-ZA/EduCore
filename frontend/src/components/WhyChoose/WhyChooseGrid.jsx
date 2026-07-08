import React from 'react'
import WhyChooseData from '../../data/WhyChooseData'
import WhyChooseCard from './WhyChooseCard'

const WhyChooseGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        WhyChooseData?.map((item) => (
          <WhyChooseCard
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}

export default WhyChooseGrid
