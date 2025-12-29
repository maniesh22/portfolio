import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Loader } from './shared/Loader'
import { Logo } from './shared/Logo'

export default function App() {
  const location = useLocation();
  return (
    <div className='min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white'>
      <Loader>
        <header className='p-6'>
          <nav className='container mx-auto flex justify-between items-center'>
            <Logo />
            <div className='flex items-center space-x-6 text-sm font-medium'>
              <Link to='/about' className='hover:text-indigo-600 transition-colors'>About</Link>
              <Link to='/experience' className='hover:text-indigo-600 transition-colors'>Experience</Link>
              <Link to='/projects' className='hover:text-indigo-600 transition-colors'>Work</Link>
              <Link to='/contact' className='hover:text-indigo-600 transition-colors'>Contact</Link>
            </div>
          </nav>
        </header>
        <main className='container mx-auto p-6'>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/experience' element={<Experience />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className='p-6 text-center text-sm'>
          © {new Date().getFullYear()} Manish Prajapati
        </footer>
      </Loader>
    </div>
  )
}
