import React from 'react'
import { motion } from 'framer-motion'

// ... (Keep the existing skillData and imports) ...
const skillData: Record<string, { color: string; logo: string }> = {
  "React": { 
    color: "#61DAFB", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  "Java Spring Boot": { 
    color: "#6DB33F", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
  },
  "Python": { 
    color: "#FFD43B", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  "Docker": { 
    color: "#2496ED", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
  },
  "Kubernetes": { 
    color: "#326CE5", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
  },
  "Jenkins": { 
    color: "#D24939", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" 
  },
  "MongoDB": { 
    color: "#47A248", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
  },
  "default": { 
    color: "#6366f1", 
    logo: "" 
  }
};

export default function Experience() {
  const jobs = [
    {
      role: 'Software Developer',
      company: 'IBM India Software Labs',
      location: 'Kochi, Kerala, India',
      period: 'Jan 2024 – Present',
      description: [
        'Led full-stack development for IBM’s MDM/Match360 Quality Dashboard using React/Redux, Java Spring Boot, Python, and MongoDB—improving load times by 25%.',
        'Architected and containerized microservices with Docker/Kubernetes and implemented CI pipelines (Jenkins/Travis) for unique PR deployments, reducing release time by 40%.',
        'Built automated deployment tooling for Linux VMs and a PR bot, significantly increasing developer productivity.',
        'Developed service health-monitoring and self-healing mechanisms using API-key driven automation to ensure high availability.',
        'Introduced code reviews and Agile practices (cut bugs 15%) and automated data-processing workflows with Python scripts, saving 10+ hours/week.'
      ],
      skills: ['React', 'Java Spring Boot', 'Python', 'Docker', 'Kubernetes', 'Jenkins', 'MongoDB']
    },
  ]

  // ... (Keep existing variants) ...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const getSkill = (skillName: string) => skillData[skillName] || skillData["default"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className='max-w-4xl mx-auto'
    >
      <h1 className='text-3xl font-bold mb-12 flex items-center gap-3'>
        <span className='text-indigo-600'>💼</span> Experience
      </h1>

      <div className='relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-16'>
        {jobs.map((job, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className='relative pl-8 md:pl-12 group'
          >
            {/* Timeline Dot */}
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              className='absolute -left-[11px] top-1 h-6 w-6 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-600 ring-4 ring-indigo-50 dark:ring-indigo-900/30 group-hover:scale-125 transition-transform duration-300' 
            />
            
            {/* Header Content ... (Same as before) ... */}
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6'>
              <div>
                <h3 className='text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors duration-300'>
                  {job.role}
                </h3>
                <div className='text-lg font-semibold text-slate-700 dark:text-slate-300'>
                  {job.company}
                </div>
              </div>
              <div className='flex flex-col items-start sm:items-end mt-2 sm:mt-0 gap-1'>
                <span className='text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-full shadow-sm shadow-indigo-200 dark:shadow-none'>
                  {job.period}
                </span>
                <span className='text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1'>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {job.location}
                </span>
              </div>
            </div>

            {/* --- FIXED BULLET POINTS SECTION --- */}
            <ul className='space-y-4 mb-8'>
              {job.description.map((point, i) => (
                <motion.li 
                  key={i} 
                  // FIX 1: Add 'relative' so z-index works.
                  // FIX 2: Add 'backface-visibility-hidden' (optional via style) to reduce text jitter.
                  className='relative flex items-start rounded-xl p-3 -ml-3 cursor-default border border-transparent'
                  
                  // Initial state ensures z-index is defined
                  initial={{ zIndex: 1, scale: 1 }}
                  
                  whileHover={{ 
                    scale: 1.02, 
                    zIndex: 10, // FIX 3: Bring hovered item to front so it doesn't push/clip neighbors
                    backgroundColor: "rgba(99, 102, 241, 0.05)", 
                    borderColor: "rgba(99, 102, 241, 0.1)",
                    boxShadow: "0 10px 30px -10px rgba(79, 70, 229, 0.2)"
                  }}
                  // Smooth spring transition
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  
                  // Optimization: Tells browser to expect changes, reducing repaint glitches
                  style={{ willChange: "transform" }}
                >
                  <svg 
                    className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* --- Skills Section (Same as before) --- */}
            <div className='flex flex-wrap gap-3'>
              {job.skills.map(skillName => {
                const { color, logo } = getSkill(skillName);
                return (
                  <motion.span 
                    key={skillName} 
                    className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border rounded-md cursor-default bg-white dark:bg-slate-800 dark:border-slate-700 shadow-sm'
                    style={{ color: color, borderColor: `${color}30` }} 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 0 15px ${color}50`, 
                      borderColor: color,
                      backgroundColor: `${color}10`
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    {logo && (
                      <img src={logo} alt="" className="w-4 h-4 object-contain" loading="lazy" />
                    )}
                    {skillName}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
