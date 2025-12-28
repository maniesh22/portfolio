import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ResumeCTA() {
  return (
    <div className='flex items-center gap-4'>
      {/* 1. Animated Download Button with Shadow Effect */}
      <motion.a
        href='/Manish_Prajapati_Resume.pdf'
        download
        className='inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg transition-colors'
        // Initial state
        initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
        // Animation states
        whileHover={{ 
          scale: 1.05, 
          // This creates a soft, indigo-colored glow/shadow below the button
          boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.4)"
        }}
        whileTap={{ 
          scale: 0.95,
          boxShadow: "0px 5px 10px rgba(79, 70, 229, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Download Resume
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </motion.a>

      {/* 2. Animated "See Projects" Link */}
      <Link 
        to='/projects' 
        className='group flex items-center gap-1 font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors'
      >
        See projects
        <motion.span
          className="inline-block"
          variants={{
            hover: { x: 4 }
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="group-hover:hidden">→</span>
          <motion.span 
            className="hidden group-hover:inline-block"
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            →
          </motion.span>
        </motion.span>
      </Link>
    </div>
  )
}
