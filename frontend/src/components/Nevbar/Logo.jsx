import React from 'react'
import navlogo from '../../assets/navlogo.png'

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">

      <img
        src={navlogo}
        alt="EduCore"
        className="h-10 w-auto"
      />

    </div>
  )
}

export default Logo
