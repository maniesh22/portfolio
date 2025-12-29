import React from 'react'
import { motion } from 'framer-motion'
import ResumeCTA from '../shared/ResumeCTA'

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='space-y-6'
        >
          <h1 className='text-4xl md:text-7xl font-extrabold tracking-tight'>
            Hi — I'm Manish<span className='text-indigo-600'>.</span>
          </h1>
          <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg'>
            Software developer at IBM India Software Labs. Building full‑stack apps with React, Java, and cloud native tooling.
          </p>
          <div className='pt-4'>
            <ResumeCTA />
          </div>
        </motion.div>

        {/* --- RIGHT: Floating Image --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center md:justify-end relative'
        >
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-60 animate-pulse" />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <motion.img
              src="https://raw.githubusercontent.com/maniesh22/me/refs/heads/main/photos/IMG_0250.JPG"
              alt="Manish Prajapati"
              className="w-64 h-64 md:w-150 md:h-150 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              animate={{
                filter: [
                  "drop-shadow(0 0 15px rgba(79, 70, 229, 0.3))", 
                  "drop-shadow(0 0 30px rgba(79, 70, 229, 0.6))",
                  "drop-shadow(0 0 15px rgba(79, 70, 229, 0.3))"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />

            {/* Floating Badge with Glowing Rocket */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
              animate={{ y: [10, -10, 10] }} 
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut", 
                delay: 0.5 
              }}
            >
              {/* Glowing Span Animation */}
              <motion.span 
                className="text-2xl block"
                // Pulses an Orange/Red glow around the rocket
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(249, 115, 22, 0))",    // No glow
                    "drop-shadow(0 0 12px rgba(249, 115, 22, 0.8))", // Bright Orange glow
                    "drop-shadow(0 0 0px rgba(249, 115, 22, 0))"     // No glow
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
