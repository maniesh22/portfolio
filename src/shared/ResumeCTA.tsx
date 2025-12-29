import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ResumeCTA() {
  return (
    <div className='flex items-center gap-4'>
      <Link to="/resume">
        <motion.div
          className='inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg transition-colors cursor-pointer'
          initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.4)"
          }}
          whileTap={{ 
            scale: 0.95,
            boxShadow: "0px 5px 10px rgba(79, 70, 229, 0.2)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          View Resume
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </motion.div>
      </Link>
    </div>
  )
}
