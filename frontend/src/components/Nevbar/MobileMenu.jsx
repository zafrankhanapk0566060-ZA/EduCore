import React from 'react'

const MobileMenu = ({ mobileOpen }) => {


  if (!mobileOpen) return null;

  return (
    <div className='lg:hidden  bg-white border-t border-gray-200'>
      <ul className='flex flex-col py-3'>
        <li>
          <a
            className='block px-5 py-3 hover:bg-gray-100'
            href="#">
            Home
          </a>
        </li>

        <li>
          <a
            className='block px-6 py-3 hover:bg-gray-100'
            href="#">
            Explore
          </a>
        </li>

        <li>
          <a
            className='block px-6 py-3 hover:bg-gray-100'
            href="#">
            Dashboard
          </a>
        </li>

        <li>
          <a
            className='block px-6 py-3 hover:bg-gray-100'
            href="#">
            Login
          </a>
        </li>

        <li>
          <a
            className="block px-6 py-3 text-white mt-2 hover:bg-blue-700 rounded-sm bg-blue-600"
            href="#">
            join
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
