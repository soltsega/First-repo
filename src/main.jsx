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
  <StrictMode >
    <div className='main'>
      <div className='header'>
        <Header />
        <Output />
        <Day />
      </div>

      <div className='app'>
        <App />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  </StrictMode>,
)
