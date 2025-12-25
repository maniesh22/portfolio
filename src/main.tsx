import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/tailwind.css'

// Determine basename based on environment
// GitHub Pages uses /portfolio-ready/, Docker/K8s uses /
const getBasename = () => {
  const path = window.location.pathname
  if (path. includes('github.io')) {
    return '/portfolio-ready/'
  }
  return '/'
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
