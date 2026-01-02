import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  // New: Hover animation for standard cards (White/Dark BG)
  const hoverEffect = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  // New: Hover animation for the Gradient Card (Purple BG)
  const hoverEffectGradient = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.5)", // Purple glow
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className='max-w-5xl mx-auto'
    >
      <h1 className='text-3xl font-bold mb-12 flex items-center gap-3'>
        <span className='text-indigo-600'>👨‍💻</span> About Me
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
        {/* 1. Main Bio Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={hoverEffect} // <--- Added Animation
          className='md:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-default'
        >
          <h2 className='text-xl font-bold mb-4 text-slate-900 dark:text-white'>The Developer</h2>
          
          <p className='text-slate-600 dark:text-slate-300 leading-relaxed mb-4'>
            I am a <strong className="text-slate-900 dark:text-white">Software Developer</strong> at <strong className="text-slate-900 dark:text-white">IBM India Software Labs</strong>, where I specialize in building scalable microservices and intuitive front-end interfaces. My daily life revolves around streamlining complex workflows—whether that's accelerating feature releases by <strong className="text-indigo-600">30%</strong> using CI/CD pipelines or optimizing legacy code to run <strong className="text-indigo-600">25%</strong> faster.
          </p>
          
          <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
            Beyond the web, I am deeply passionate about the <strong className="text-slate-900 dark:text-white">Android ecosystem</strong>. I build modern mobile apps using <strong className="text-slate-900 dark:text-white">Kotlin</strong> and <strong className="text-slate-900 dark:text-white">Jetpack Compose</strong>, focusing on clean MVVM architecture and fluid animations. I love solving problems that sit at the intersection of performance, automation, and user experience.
          </p>
        </motion.div>

        {/* 2. Education Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={hoverEffect} // <--- Added Animation
          className='bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-default'
        >
          <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
            <svg className="w-24 h-24 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
          </div>
          <h2 className='text-xl font-bold mb-4 text-slate-900 dark:text-white relative z-10'>Education</h2>
          <div className='relative z-10'>
            <h3 className='font-semibold text-indigo-600'>Bachelor of Technology</h3>
            <p className='text-sm text-slate-500 dark:text-slate-400 mt-1'>Lakshmi Narain College of Technology, Bhopal</p>
            <div className='mt-4 inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
              GPA: 8.66 / 10.0
            </div>
            <p className='text-xs text-slate-400 mt-2'>Aug 2019 – May 2023</p>
          </div>
        </motion.div>

        {/* 3. Certifications Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={hoverEffect} // <--- Added Animation
          className='md:col-span-1 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm cursor-default'
        >
          <h2 className='text-xl font-bold mb-4 text-slate-900 dark:text-white'>Certifications</h2>
          <ul className='space-y-3'>
            {[
              { name: 'Wipro TalentNext', desc: 'Java Full Stack' },
              { name: 'HackerRank', desc: 'Problem Solving & SQL' },
              { name: 'Cisco CCNAv7', desc: 'Network Security' },
            ].map((cert, i) => (
              <li key={i} className='flex items-start gap-3'>
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <div className='text-sm font-semibold text-slate-800 dark:text-slate-200'>{cert.name}</div>
                  <div className='text-xs text-slate-500'>{cert.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4. Interests / Hobbies Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={hoverEffectGradient} // <--- Added Gradient Glow Animation
          className='md:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl text-white shadow-lg overflow-hidden relative cursor-default'
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-2xl"></div>

          <h2 className='text-xl font-bold mb-4 relative z-10'>When I'm Not Coding...</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10'>
            <div className='flex items-center gap-4'>
              <div className='bg-white/20 p-3 rounded-lg backdrop-blur-sm'>
                <span className='text-2xl'>🕺</span>
              </div>
              <div>
                <h3 className='font-bold'>Break Dance</h3>
                <p className='text-sm text-indigo-100'>Popping, Locking & Rhythm</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-white/20 p-3 rounded-lg backdrop-blur-sm'>
                <span className='text-2xl'>🎧</span>
              </div>
              <div>
                <h3 className='font-bold'>EDM</h3>
                <p className='text-sm text-indigo-100'>Electronic Dance Music Enthusiast</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-white/20 p-3 rounded-lg backdrop-blur-sm'>
                <span className='text-2xl'>📱</span>
              </div>
              <div>
                <h3 className='font-bold'>Android Dev</h3>
                <p className='text-sm text-indigo-100'>Building cool apps like JetReader</p>
              </div>
            </div>
            
            <div className='flex items-center gap-4'>
              <div className='bg-white/20 p-3 rounded-lg backdrop-blur-sm'>
                <span className='text-2xl'>☕</span>
              </div>
              <div>
                <h3 className='font-bold'>Java Programming</h3>
                <p className='text-sm text-indigo-100'>Deep diving into JVM</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}
