import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- Visual Component ---
const LoaderVisual = () => {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-24 h-24 md:w-32 md:h-32"
        initial={{ scale: 0.8, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Changed from standard svg to motion.svg to support filter animation */}
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-slate-900 dark:text-white"
          role="img"
          aria-label="Loading Logo"
          
          // 1. Add the Glowing Shadow Effect (Auto-playing)
          initial={{ filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" }}
          animate={{ filter: "drop-shadow(0px 0px 20px rgba(0, 166, 255, 0.8))" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Hexagon Path */}
          <motion.path
            d="M50 5 L93.3 25 V75 L50 95 L6.7 75 V25 L50 5Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            
            // 2. Drawing Animation (0 -> 1) matched with the shadow
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Letter "M" */}
          <motion.text
            x="50"
            y="62"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="42"
            fontWeight="bold"
            fill="currentColor"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            M
          </motion.text>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}

// --- Logic Component (No Changes) ---
interface LoaderProps {
  children: React.ReactNode
}

export const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Keep exactly 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoaderVisual key="loader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
