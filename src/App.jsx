import './App.css'
import Contacts from './contacts.jsx'


function App() {

  return (
    <div className='contacts'>

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

    </div>
  )
}

export default App
