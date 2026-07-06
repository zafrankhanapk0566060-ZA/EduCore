import React, { useState } from 'react'
import Logo from './Logo'
import ExploreDropdown from './ExploreDropdown'
import SearchBar from './SearchBar'
import DesktopMenu from './DesktopMenu'
import MobileButton from './MobileButton'
import MobileMenu from './MobileMenu'
import { categories } from '../../data/NavData.js'


const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false)


  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Left Side */}
          <div className="flex items-center gap-6">

            <Logo />

            <ExploreDropdown
              categories={categories}
            />

            <SearchBar />

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            <DesktopMenu />

            <MobileButton
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />

          </div>

        </div>

        <MobileMenu
          mobileOpen={mobileOpen}
        />

      </div>

    </nav>
  )
}

export default Navbar
