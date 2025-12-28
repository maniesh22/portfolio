import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/tailwind.css'

// Type assertion to fix TypeScript error
const getBasename = () => {
  if ((import.meta as any).env.DEV) return '/'
  return '/portfolio-ready/'
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
