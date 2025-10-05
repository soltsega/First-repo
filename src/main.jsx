import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Output() {
  const firstName = "Solomon";
  const lastName = "Tsega";
  return (
    <>
      <h1>This is my first repo</h1>
      <p>My name is {firstName} {lastName}.</p>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Output />
  </StrictMode>,
)
