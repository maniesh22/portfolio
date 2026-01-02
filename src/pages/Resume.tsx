import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Resume() {
  // Dynamically construct the correct path based on the environment
  // This will be "/Resume.pdf" locally
  // And "/portfolio/Resume.pdf" on GitHub Pages
  const resumeUrl = `${import.meta.env.BASE_URL}Manish_Prajapati_Resume.pdf`

  return (
    <div className="container mx-auto px-4 py-12 pt-32 min-h-screen flex flex-col items-center">
      
      {/* Header Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Resume</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Previewing <strong>Manish_Prajapati_Resume.pdf</strong>
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/"
            className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
          
          <motion.a
            // dynamic BASE_URL variable
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </motion.a>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl h-[80vh] bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative"
      >
        {/* Loading Spinner / Fallback Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <span className="text-slate-400">Loading Resume...</span>
        </div>

        {/* The PDF Object */}
        <iframe 
          // dynamic BASE_URL variable
          src={`${resumeUrl}#toolbar=0`} 
          className="w-full h-full relative z-10"
          title="Resume PDF"
        />
      </motion.div>
    </div>
  )
}
