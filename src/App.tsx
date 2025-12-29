import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Loader } from './shared/Loader'
import { Logo } from './shared/Logo'

export default function App() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    navigate('/');
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
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
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getLinkClass = (id: string) => {
    const base = "cursor-pointer transition-all duration-300 relative px-1 ";
    const active = "text-indigo-600 font-bold scale-105";
    const inactive = "hover:text-indigo-600 text-slate-600 dark:text-slate-300";

    return activeSection === id ? `${base} ${active}` : `${base} ${inactive}`;
  };

  return (
    <div className='min-h-screen'>
      <Loader>
        <motion.header
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-40 p-6 transition-all duration-300 ${scrolled
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
                {activeSection === 'about' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>

              <button onClick={() => scrollToSection('experience')} className={getLinkClass('experience')}>
                Experience
                {activeSection === 'experience' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>

              <button onClick={() => scrollToSection('projects')} className={getLinkClass('projects')}>
                Work
                {activeSection === 'projects' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>

              <button onClick={() => scrollToSection('contact')} className={getLinkClass('contact')}>
                Contact
                {activeSection === 'contact' && (
                  <motion.span layoutId="active-dot" className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>
            </div>
          </nav>
        </motion.header>

        {/* MAIN CONTENT AREA - Sequentially Stacked Sections */}
        <main className='flex flex-col flex-grow'>

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

        </main>

        <footer className='p-6 text-center text-sm border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900'>
          © {new Date().getFullYear()} Manish Prajapati
        </footer>
      </Loader>
    </div>
  )
}
