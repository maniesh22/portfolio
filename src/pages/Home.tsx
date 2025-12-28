import React from 'react'
import { motion } from 'framer-motion'
import ResumeCTA from '../shared/ResumeCTA'

export default function Home() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Java", "Spring Boot", "Node.js"] },
    { category: "Mobile", items: ["Kotlin", "Jetpack Compose", "Android SDK"] }
  ];
  return (
    <div className='space-y-12'>
      <section aria-label='Hero' className='pt-8'>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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

      <section aria-label='Skills' className='mt-12'>
        <h2 className='text-3xl font-bold mb-6'>Technical Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className='p-4 border rounded-lg bg-slate-50 dark:bg-slate-800 dark:border-slate-700'>
              <h3 className='font-semibold text-lg text-indigo-600 mb-3'>{skillGroup.category}</h3>
              <div className='flex flex-wrap gap-2'>
                {skillGroup.items.map((item) => (
                  <span key={item} className='px-3 py-1 text-sm bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-full shadow-sm'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
