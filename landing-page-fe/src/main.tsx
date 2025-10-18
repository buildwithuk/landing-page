import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPageComponent from './landing-page-component.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPageComponent />
  </StrictMode>,
)
