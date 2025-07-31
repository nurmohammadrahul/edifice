import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
  
  document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  document.documentElement.style.colorScheme = initialTheme
  document.documentElement.dataset.theme = initialTheme 
}

// Run initialization
initializeTheme()

// Create root and render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)