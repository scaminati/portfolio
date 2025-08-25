import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Initialize theme from localStorage
const stored = localStorage.getItem('theme')
if (stored === 'dark') {
  document.documentElement.classList.add('dark')
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
