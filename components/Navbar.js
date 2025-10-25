import React from 'react'
import Link from 'next/link'

const Navbar = ({ hideNavbar }) => {
  return (
    <nav className={`bg-white w-[90vw] flex justify-between fixed top-12 right-[4.5vw] rounded-full p-3 transition-all duration-1000 ease-in-out z-50 ${
      hideNavbar ? '-translate-y-[200px] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
    }`}>
    <div className="logo flex gap-16 items-center px-8">
      <Link href="/"> <img className="h-10 w-auto object-contain" src="Namit..png" alt="Namit logo" /></Link>

        <ul className='flex gap-6 text-black items-center'>
            <Link href="/">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <div className='flex gap-3'>
        <button className='login bg-gray-200 px-6 py-4 rounded-md font-bold'>Hi</button>
        <button className='signup bg-gray-800 text-white rounded-full py-5  px-7 font-bold'>Developers</button>
      </div>
    </nav>
  )
}

export default Navbar
