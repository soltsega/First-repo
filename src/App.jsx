import './App.css'
import Contacts from './contacts.jsx'
import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

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
function App() {

  return (
<<<<<<< HEAD
    <>
      {/* The first person */}
      <div className='contacts'>
        <article className='contact-card'>
          <img src=''
            alt=''
          />
          <h3>Mr. Whiskerson</h3>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>+251938235449</p>
          </div>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>whisker@gmail.com</p>
          </div>
        </article>
      </div>

      {/* The socond person */}
      <div className='contacts'>
        <article className='contact-card'>
          <img src=''
            alt=''
          />
          <h3>Mr. Fluffykins</h3>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>+251938235449</p>
          </div>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>fluff@gmail.com</p>
          </div>
        </article>
      </div>

      <div className='contacts'>
        <article className='contact-card'>
          <img src=''
            alt=''
          />
          <h3>Mr. Felix</h3>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>+251938235449</p>
          </div>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>felix@gmail.com</p>
          </div>
        </article>
      </div>

      <div className='contacts'>
        <article className='contact-card'>
          <img src=''
            alt=''
          />
          <h3>Mr. Pumpkin</h3>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>+251938235449</p>
          </div>

          <div className='info-group'>
            <img
              src=''
              alt=''
            />
            <p>pumpkin@gmail.com</p>
          </div>
        </article>
      </div>
    </>
=======
    <div className='contacts'>
      <Header />
      <Day />
      <Contacts
        img="./src/whiskerson.png"
        name="Mr. Whiskerson"
        phone="0932726376"
        email="whiskerson@gmail.com"
      />

      <Contacts
        img="./src/pumpkin.png"
        name="Mr. Pumpkin"
        phone="0932726376"
        email="pumpkin@gmail.com" />

      <Contacts
        img="./src/felix1.png"
        name="Mr. Felix"
        phone="0932726376"
        email="felix@gmail.com"
      />

      <Contacts
        img="./src/fluffykins.png"
        name="Mr. Fluffykins"
        phone="0932726376"
        email="fluffykins@gmail.com"
      />
      <Footer />
    </div>
>>>>>>> dev
  )
}

export default App
