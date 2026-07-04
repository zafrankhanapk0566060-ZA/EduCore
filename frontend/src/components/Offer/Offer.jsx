import React from 'react'
import mainlogo from '../../assets/MainLogo.png'
import offerData from '../../data/offerData'

const Offer = () => {
  return (
    <div className='max-w-5xl mx-auto text-center p-10 flex flex-col items-center justify-center text-white gap-3'>
      <img src={mainlogo} className='h-30' alt="" />

      <h4 className='text-base font-bold'>{offerData.heading}</h4>

      <p>{offerData.description}</p>
      <button className='py-3 px-14 bg-white text-gray-800 rounded-xl'>{offerData.button}</button>
      <p className='text-lg'>{offerData.price}</p>

      <h1 className='text-3xl font-bold'>{offerData.termsTitle}</h1>

      <h4 className='text-xl'>{offerData.terms}</h4>


    </div>
  )
}

export default Offer
