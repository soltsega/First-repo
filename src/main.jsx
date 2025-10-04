import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Output() {
  return (
    <h1>This is my first repo</h1>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Output />
  </StrictMode>,
)
