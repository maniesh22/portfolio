import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className='min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white'>
      <header className='p-6 border-b'>
        <nav className='container mx-auto flex justify-between items-center'>
          <Link to='/' className='text-xl font-semibold'>Manish</Link>
          <div className='space-x-4'>
            <Link to='/projects' className='hover:underline'>Projects</Link>
            <Link to='/contact' className='hover:underline'>Contact</Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <footer className='p-6 text-center text-sm'>
        © {new Date().getFullYear()} Manish Prajapati
      </footer>
    </div>
  )
}
