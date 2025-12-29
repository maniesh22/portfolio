import React from 'react'
import { motion } from 'framer-motion'
import ResumeCTA from '../shared/ResumeCTA'

export default function Home() {
  return (
    <div className='space-y-12 flex flex-col justify-center h-[80vh]'>
      <section aria-label='Hero'>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{duration:0.6}}>
          <h1 className='text-4xl md:text-7xl font-extrabold tracking-tight mb-6'>
            Hi — I'm Manish<span className='text-indigo-600'>.</span>
          </h1>
          <p className='mt-4 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed'>
            Software developer at IBM India Software Labs. Building full‑stack apps with React, Java, and cloud native tooling.
          </p>
          <div className='mt-8'>
            <ResumeCTA />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
