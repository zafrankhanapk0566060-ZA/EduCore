import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from 'react';





const Navbar = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    const CATEGORIES = [
        { id: 1, name: 'PAF Tests', icon: '✈️', courses: '120+' },
        { id: 2, name: 'Army PMA', icon: '🪖', courses: '85+' },
        { id: 3, name: 'ISSB Prep', icon: '🎯', courses: '200+' },
        { id: 4, name: 'FPSC', icon: '🏛️', courses: '150+' },
        { id: 5, name: 'NTS NAT/GAT', icon: '📝', courses: '300+' },
        { id: 6, name: 'MDCAT', icon: '⚕️', courses: '450+' },
        { id: 7, name: 'ECAT', icon: '⚙️', courses: '380+' },
        { id: 8, name: 'Computer Science', icon: '💻', courses: '500+' },
    ];





    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Left: Logo & Explore */}
                    <div className="flex items-center gap-6">
                        <div
                            className="flex-shrink-0 flex items-center cursor-pointer"
                            onClick={() => onNavigate('home')}
                        >
                            <div className="w-8 h-8 bg-[#0056D2] rounded text-white flex items-center justify-center font-bold text-xl mr-2">
                                E
                            </div>
                            <span className="font-bold text-2xl text-[#0056D2] tracking-tight">EduCore</span>
                        </div>
                        <div className="hidden md:block relative group">
                            <button className="flex items-center gap-1 text-gray-700 font-semibold hover:text-[#0056D2] px-3 py-2 rounded-md transition-colors">
                                Explore<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                            {/* Simple Dropdown placeholder */}
                            <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 shadow-lg rounded-md mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    {CATEGORIES.slice(0, 5).map(c => (
                                        <a key={c.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0056D2] cursor-pointer" onClick={() => onNavigate('notes')}>{c.name}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center: Search */}
                    <div className="hidden lg:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="What do you want to learn?"
                                className="w-full border border-gray-900 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-transparent transition-all"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-[#0056D2] text-white rounded-full w-10 flex items-center justify-center hover:bg-[#004aB5]">

                                <IoIosSearch className="w-5 h-5" />

                            </button>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={() => onNavigate('dashboard')} className="text-gray-600 hover:text-[#0056D2] font-medium text-sm">Dashboard</button>
                        <button onClick={() => onNavigate('login')} className="text-[#0056D2] font-semibold hover:underline text-sm px-2">Log In</button>
                        <button onClick={() => onNavigate('register')} className="py-2.5 px-5 text-sm border-transparent text-white bg-[#0056D2] hover:bg-[#004aB5] shadow-sm">Join for Free</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900 p-2">
                            {isMobileMenuOpen}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <input type="text" placeholder="Search courses..." className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4" />
                        <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Home</button>
                        <button onClick={() => { onNavigate('notes'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Notes & PDFs</button>
                        <button onClick={() => { onNavigate('dashboard'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Student Dashboard</button>
                        <button onClick={() => { onNavigate('admin'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Admin Panel</button>
                        <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col gap-2">
                            <Button onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false); }} variant="outline" className="w-full">Log In</Button>
                            <Button onClick={() => { onNavigate('register'); setIsMobileMenuOpen(false); }} variant="primary" className="w-full">Join for Free</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
