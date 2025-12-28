import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Logo = () => {
  return (
    <Link to="/" aria-label="Home">
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-slate-900 dark:text-white"
        
        // 1. Define animation states for the container
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        
        // 2. Define the variants (styles) for each state
        variants={{
          initial: { 
            scale: 1, 
            filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" 
          },
          hover: { 
            scale: 1.1, 
            // drop-shadow makes the SHAPE glow, not the bounding box
            filter: "drop-shadow(0px 5px 10px rgba(0, 166, 255, 1))",
            transition: { type: "spring", stiffness: 400, damping: 17 }
          },
          tap: { 
            scale: 0.95,
            filter: "drop-shadow(0px 2px 5px rgba(79, 70, 229, 0.4))"
          }
        }}
      >
        {/* Hexagon Path */}
        <motion.path
          d="M50 5 L93.3 25 V75 L50 95 L6.7 75 V25 L50 5Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          
          // 3. Sync the path animation with the parent's hover state
          variants={{
            initial: { pathLength: 1 },
            hover: { 
              pathLength: [1, 0, 1], // Erase and redraw
              transition: { duration: 1, ease: "easeInOut" }
            }
          }}
        />
        
        {/* The Letter M */}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="42"
          fontWeight="bold"
          fill="currentColor"
          style={{ pointerEvents: 'none' }}
        >
          M
        </text>
      </motion.svg>
    </Link>
  )
}
