import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  const jobs = [
    {
      role: 'Software Developer',
      company: 'IBM India Software Labs',
      period: 'Present',
      desc: 'Building cloud-native applications and full-stack solutions using React and Java.'
    },
    // Add more experience items here
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className='max-w-3xl mx-auto'
    >
      <h1 className='text-3xl font-bold mb-8'>Experience</h1>
      <div className='space-y-8 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-4'>
        {jobs.map((job, index) => (
          <div key={index} className='relative'>
            {/* Timeline Dot */}
            <span className='absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-600' />
            
            <h3 className='text-xl font-semibold'>{job.role}</h3>
            <div className='text-indigo-600 font-medium mb-2'>
              {job.company} • <span className='text-slate-500 dark:text-slate-400 text-sm'>{job.period}</span>
            </div>
            <p className='text-slate-700 dark:text-slate-300'>{job.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
