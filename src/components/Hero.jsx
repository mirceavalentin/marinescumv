import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        pt-20 min-h-screen bg-slate-950 
        flex flex-col justify-center 
        px-4 sm:px-6 lg:px-8
      "
    >
      {/* Only this div fades in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-left py-16 sm:py-24 lg:py-32"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 py-4">
          Hello.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          My name is <b>Marinescu Mircea-Valentin</b>.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I'm studying <b>Economic Informatics</b> in my 3rd year at ASE.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I've built this page to showcase some projects I made <b>so far</b>.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Currently looking for a software related <b>internship or position</b> to <b>grow my knowledge</b>.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Right now <b>I'm working</b> on a chat application built using <b>Java with Spring Boot</b>, which will be hosted here.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          See <b>my projects</b> below.
        </p>
        <div className="mt-8 flex justify-center">
  <svg
    className="w-6 h-6 animate-bounce text-gray-400"
    fill="none" stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M19 9l-7 7-7-7" />
  </svg>
</div>
      </motion.div>
    </section>
  )
}
