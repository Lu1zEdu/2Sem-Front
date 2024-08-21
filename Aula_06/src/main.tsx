
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './Routes/Home/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <App />
  </StrictMode>,
)
