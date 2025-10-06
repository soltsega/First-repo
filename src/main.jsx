import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'


function Output() {
  const firstName = "Solomon";
  const lastName = "Tsega";
  return (
    <>
      {/* <p>My name is {firstName} {lastName}.</p> */}
    </>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode >
    <App />

  </StrictMode>,
)
