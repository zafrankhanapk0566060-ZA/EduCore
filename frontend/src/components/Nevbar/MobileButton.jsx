import React from 'react'
import { IoIosMenu } from "react-icons/io";

const MobileButton = ({ mobileOpen, setMobileOpen }) => {
  return (
    <button
      className=' lg:hidden p-2 text-3xl text-gray-700 hover:text-blue-600  transition-all'
      onClick={() => setMobileOpen(!mobileOpen)}
    >
      <IoIosMenu />
    </button>
  )
}

export default MobileButton
