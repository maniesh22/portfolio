import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className='max-w-2xl mx-auto space-y-6'
    >
      <h1 className='text-3xl font-bold'>About Me</h1>
      <p className='text-lg leading-relaxed'>
        I am a software developer at IBM India Software Labs with a passion for building full‑stack applications.
        I specialize in <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Java</strong>.
      </p>
      <p className='text-lg leading-relaxed'>
        When I'm not coding, I enjoy exploring new web technologies, optimizing developer workflows, and contributing to open source.
      </p>
    </motion.div>
  )
}
