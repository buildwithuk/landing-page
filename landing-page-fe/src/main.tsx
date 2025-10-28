import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import LandingPageComponent from './landing-page-component.tsx'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPageComponent />
  </StrictMode>,
)
