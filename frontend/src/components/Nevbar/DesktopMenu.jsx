import React from 'react'

const DesktopMenu = () => {
  return (
    <div className='hidden lg:flex items-center gap-6'>
      <a
        className="text-gray-700 hover:text-blue-600 transition
"
        href="#">Dashboard</a>
      <a href="#">login</a>
      <a
        className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium
"
        href="#">join for free</a>
    </div>
  )
}

export default DesktopMenu
