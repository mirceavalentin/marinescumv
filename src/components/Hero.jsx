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
          I'm a 3rd-year <b>Economic Informatics</b> student at ASE (CSIE) and a passionate developer.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Currently working as a <b>Software Developer - Cloud Applications & AI</b> at <b>SAP</b>.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          My main focus is building scalable <b>cloud-native solutions</b> using <b>Node.js, TypeScript, and SAP CAP</b>, while exploring <b>Generative AI</b> integrations for business processes.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I built this page to showcase my journey and projects. Check them out below!
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
