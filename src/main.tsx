import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignIn from './screens/SignIn.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignIn />
  </StrictMode>,
)
