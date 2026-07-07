import React from 'react'
import testimonials from '../../data/Testimonials'
import TestimonialCard from './TestimonialCard'
import TestimonialHeader from './TestimonialHeader'


const Testimonials = () => {
  return (
    <section className='bg-gray-100 py-12 space-y-16'>
      <TestimonialHeader/>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">

          {
            testimonials.map((item) => (

              <TestimonialCard
                key={item.id}
                item={item}
              />
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Testimonials
