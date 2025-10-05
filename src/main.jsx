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

function Day() {
  const hours = new Date().getHours()
  let timeOfDay;


  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return (
    <h1>Good {timeOfDay}🤗</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Output />
    <Day />
  </StrictMode>,
)
