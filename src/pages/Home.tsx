import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ResumeCTA from '../shared/ResumeCTA'

// --- HELPER: Spark Particle System ---
const SparkParticles = () => {
  const [sparks, setSparks] = useState<{ id: number; left: string; top: string }[]>([]);

  useEffect(() => {
    // This interval syncs with the 1.5s rotation of the ring
    const interval = setInterval(() => {
      const now = Date.now();
      // Calculate current angle (0 to 2PI) based on time
      // 1500ms matches the rotation duration of the ring
      const duration = 1500;
      const progress = (now % duration) / duration;
      const angle = progress * Math.PI * 2;

      // Calculate position on the circle (using percentages)
      // -PI/2 aligns the start to the top (12 o'clock) to match CSS rotation
      const radius = 50; // % radius
      const left = 50 + radius * Math.cos(angle - Math.PI / 2) + '%';
      const top = 50 + radius * Math.sin(angle - Math.PI / 2) + '%';

      const newSpark = { id: now, left, top };

      // Keep only recent sparks to prevent memory leaks
      setSparks(prev => [...prev.slice(-15), newSpark]);
    }, 60); // Spawn a spark every 60ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {sparks.map(spark => (
          <motion.div
            key={spark.id}
            initial={{ 
              left: spark.left, 
              top: spark.top, 
              scale: 1, 
              opacity: 1 
            }}
            animate={{ 
              // Drop DOWN (gravity simulation) regardless of spark origin
              top: `calc(${spark.top} + 100px)`, 
              opacity: 0, 
              scale: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            style={{ position: 'absolute' }}
            // Light Violet Color (#a78bfa is violet-400)
            className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_#a78bfa] z-10"
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full'>
        
        {/* --- LEFT: Text Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='space-y-6'
        >
          <h1 className='text-4xl md:text-7xl font-extrabold tracking-tight'>
            Hi — I'm Manish<span className='text-indigo-600'>.</span>
          </h1>
          <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg'>
            Software developer at IBM India Software Labs. Building full‑stack apps with React, Java, and cloud native tooling.
          </p>
          <div className='pt-4'>
            <ResumeCTA />
          </div>
        </motion.div>

        {/* --- RIGHT: Floating Image with Loader --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center md:justify-end relative'
        >
          {/* Static Background Blob */}
          <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-60 animate-pulse" />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            {/* 1. THE LOADER */}
            <AnimatePresence mode="wait">
              {!isLoaded && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
                  className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                >
                  <div className="w-64 h-64 md:w-150 md:h-150 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10">
                    
                    {/* The Spinning Gradient Ring */}
                    <motion.div
                      className="absolute w-full h-full rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, #a78bfa 100%)', // Violet tail
                        maskImage: 'radial-gradient(transparent 68%, black 70%)',
                        WebkitMaskImage: 'radial-gradient(transparent 68%, black 70%)',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />

                    {/* The Spark Particles System */}
                    <div className="absolute inset-0 w-full h-full">
                       <SparkParticles />
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2. THE IMAGE */}
            <motion.img
              src="https://raw.githubusercontent.com/maniesh22/me/refs/heads/main/photos/IMG_0250.JPG"
              alt="Manish Prajapati"
              onLoad={() => setIsLoaded(true)}
              className="w-64 h-64 md:w-150 md:h-150 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10"
              
              initial={{ opacity: 0 }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? [
                  "drop-shadow(0 0 15px rgba(79, 70, 229, 0.3))", 
                  "drop-shadow(0 0 30px rgba(79, 70, 229, 0.6))",
                  "drop-shadow(0 0 15px rgba(79, 70, 229, 0.3))"
                ] : "none"
              }}
              transition={{
                opacity: { duration: 0.5 },
                filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
            />

            {/* Floating Badge */}
            {isLoaded && (
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [10, -10, 10] }} 
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: { type: "spring" },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <motion.span 
                  className="text-2xl block"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(249, 115, 22, 0))",
                      "drop-shadow(0 0 12px rgba(249, 115, 22, 0.8))",
                      "drop-shadow(0 0 0px rgba(249, 115, 22, 0))"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  🚀
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
