import React from 'react'
import { motion } from 'framer-motion'
import ResumeCTA from '../shared/ResumeCTA'

export default function Home() {
  return (
    <div className='space-y-12'>
      <section aria-label='Hero' className='pt-8'>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{duration:0.6}}>
          <h1 className='text-4xl md:text-6xl font-extrabold'>Hi — I'm Manish<span className='text-indigo-600'>.</span></h1>
          <p className='mt-4 max-w-2xl'>Software developer at IBM India Software Labs. Building full‑stack apps with React, Java, and cloud native tooling.</p>
          <div className='mt-6'>
            <ResumeCTA />
          </div>
        </motion.div>
      </section>

      <section aria-label='About'>
        <h2 className='text-2xl font-semibold'>About</h2>
        <p className='mt-3'>I build responsive web apps, RESTful services, and Android apps. I enjoy creating performant UI and automating developer workflows.</p>
      </section>

      <section aria-label='Skills'>
        <h2 className='text-2xl font-semibold'>Skills</h2>
        <ul className='mt-3 grid grid-cols-2 md:grid-cols-4 gap-2'>
          <li className='p-3 border rounded'>React</li>
          <li className='p-3 border rounded'>TypeScript</li>
          <li className='p-3 border rounded'>Java / Spring Boot</li>
          <li className='p-3 border rounded'>Kotlin / Jetpack Compose</li>
        </ul>
      </section>
    </div>
  )
}
