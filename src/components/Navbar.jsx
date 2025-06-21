// src/components/Navbar.jsx
import React, { useState } from 'react'
import { FaReact }               from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'
import { GiHamburgerMenu }       from 'react-icons/gi'
import { IoMdClose }             from 'react-icons/io'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-4 py-3 z-50 shadow">
       <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Made using + icons */}
        <div className="flex items-center space-x-4">
          <span className="font-medium">Made using</span>
          <a href="https://reactjs.org" aria-label="React" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            <FaReact size={24}/>
          </a>
          <a href="https://tailwindcss.com" aria-label="Tailwind CSS" target="_blank" rel="noopener noreferrer"
             className="hover:text-teal-400 transition-colors">
            <SiTailwindcss size={24}/>
          </a>
          <a href="https://vitejs.dev" aria-label="Vite" target="_blank" rel="noopener noreferrer"
             className="hover:text-green-400 transition-colors">
            <SiVite size={24}/>
          </a>
        </div>

        {/* Right on desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://github.com/yourname"    className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourname" className="hover:underline">LinkedIn</a>
          <a href="mailto:you@example.com"          className="hover:underline">Email</a>
        </div>

        {/* Hamburger on mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open
            ? <IoMdClose size={24}/>
            : <GiHamburgerMenu size={24}/>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 space-y-2 text-center">
          <a href="https://github.com/mirceavalentin"    className="block py-1 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/mirceavalentin" className="block py-1 hover:underline">LinkedIn</a>
          <a href="mailto:marinescumirceavalentin@gmail.com"          className="block py-1 hover:underline">Email</a>
        </div>
      )}
    </nav>
  )
}
