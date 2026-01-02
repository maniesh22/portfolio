import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';


import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

import { Loader } from './shared/Loader'
import { Logo } from './shared/Logo'

// --- Sub-Component: The Main Scrollable Page ---
const LandingPage = () => {
  return (
    <div className='flex flex-col flex-grow'>
      <section id="home" className="min-h-screen pt-32 px-6 container mx-auto">
        <Home />
      </section>
      <section id="about" className="min-h-screen pt-24 px-6 container mx-auto">
        <About />
      </section>
      <section id="experience" className="min-h-screen pt-24 px-6 container mx-auto">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen pt-24 px-6 container mx-auto">
        <Projects />
      </section>
      <section id="contact" className="min-h-[50vh] pt-24 px-6 container mx-auto mb-20">
        <Contact />
      </section>
    </div>
  )
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // State
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // --- Scroll & Header Logic ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 5);

    // Hide header on scroll down, show on scroll up
    if (latest > previous && latest > 15) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Determine Active Section (Only relevant on Landing Page)
    if (location.pathname === '/') {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  });

  // --- Smooth Scroll Function ---
  const scrollToSection = (id: string) => {
    // If we are NOT on home page (e.g., on /resume), go home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      // Standard scroll if already on home
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const getLinkClass = (id: string) => {
    const base = "cursor-pointer transition-all duration-300 relative px-1 ";
    // Only show active state if we are actually on the home page
    const isActive = activeSection === id && location.pathname === '/';
    
    const active = "text-indigo-600 font-bold scale-105";
    const inactive = "hover:text-indigo-600 text-slate-600 dark:text-slate-300";
    
    return isActive ? `${base} ${active}` : `${base} ${inactive}`;
  };

  return (
    <div className='min-h-screen'>
      <Loader>
        <motion.header
          variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-40 p-6 transition-all duration-300 ${
            scrolled 
              ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' 
              : 'bg-transparent'
          }`}
        >
          <nav className='container mx-auto flex justify-between items-center'>
            <div onClick={() => scrollToSection('home')} className="cursor-pointer">
               <Logo />
            </div>

            <div className='flex items-center space-x-6 text-sm font-medium'>
              <button onClick={() => scrollToSection('about')} className={getLinkClass('about')}>
                About
                {activeSection === 'about' && location.pathname === '/' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>
              
              <button onClick={() => scrollToSection('experience')} className={getLinkClass('experience')}>
                Experience
                {activeSection === 'experience' && location.pathname === '/' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>
              
              <button onClick={() => scrollToSection('projects')} className={getLinkClass('projects')}>
                Projects
                {activeSection === 'projects' && location.pathname === '/' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>
              
              <button onClick={() => scrollToSection('contact')} className={getLinkClass('contact')}>
                Contact
                {activeSection === 'contact' && location.pathname === '/' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>
            </div>
          </nav>
        </motion.header>

        {/* --- ROUTING --- */}
        <main className='flex-grow'>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Route for the Main Scrollable Landing Page */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Route for the new Resume Page */}
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className='p-6 text-center text-sm border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900'>
          © {new Date().getFullYear()} Manish Prajapati
        </footer>
      </Loader>
    </div>
  )
}
