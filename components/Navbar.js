'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = ({ hideNavbar }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`bg-white w-[95vw] lg:w-[90vw] flex justify-between items-center fixed top-6 lg:top-12 left-[2.5vw] lg:right-[4.5vw] lg:left-auto rounded-full p-3 lg:p-3 transition-all duration-500 ease-in-out z-50 ${
      hideNavbar ? '-translate-y-[200px] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
    }`}>
      <div className="logo flex items-center px-4 lg:px-8">
        <Link href="/">
          <img className="h-8 lg:h-10 w-auto object-contain" src="/Namit..png" alt="Namit logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex gap-6 text-black items-center font-medium'>
        <Link href="/" className="hover:text-[#254f1a] transition-colors">About</Link>
        <Link href="/projects" className="hover:text-[#254f1a] transition-colors">Projects</Link>
        <Link href="/blog" className="hover:text-[#254f1a] transition-colors">Blog</Link>
        <Link href="/experience" className="hover:text-[#254f1a] transition-colors">Experience</Link>
        <Link href="/contact" className="hover:text-[#254f1a] transition-colors">Contact</Link>
      </ul>

      {/* Desktop Buttons */}
      <div className='hidden lg:flex gap-3'>
        <button className='login bg-gray-200 px-6 py-4 rounded-md font-bold hover:bg-gray-300 transition-colors'>Hi</button>
        <button className='signup bg-gray-800 text-white rounded-full py-5 px-7 font-bold hover:bg-gray-700 transition-colors'>Developers</button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex flex-col gap-1.5 px-4"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl p-6 mx-4">
          <ul className='flex flex-col gap-4 text-black font-medium'>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#254f1a] transition-colors py-2 border-b">About</Link>
            <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#254f1a] transition-colors py-2 border-b">Projects</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#254f1a] transition-colors py-2 border-b">Blog</Link>
            <Link href="/experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#254f1a] transition-colors py-2 border-b">Experience</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#254f1a] transition-colors py-2">Contact</Link>
          </ul>
          <div className='flex flex-col gap-3 mt-4'>
            <button className='login bg-gray-200 px-6 py-4 rounded-md font-bold hover:bg-gray-300 transition-colors'>Hi</button>
            <button className='signup bg-gray-800 text-white rounded-full py-4 px-7 font-bold hover:bg-gray-700 transition-colors'>Developers</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
