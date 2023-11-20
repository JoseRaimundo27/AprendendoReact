import { useState } from 'react'
import Perfil from './components/Perfil'
import Logo from './components/Logo'
import Cards from './components/Cards'
import './assets/css/style.css'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <div className="container">
      <div className="card">
          <div className="perfil">
            <Perfil/>
          </div>

          <div className="logos">
            <Logo href= "https://github.com/JoseRaimundo27" name="Github"/>
            <Logo href="https://www.linkedin.com/in/jos%C3%A9-alves-41a8a5283/" name="Linkedin" />
            <Logo href= "https://github.com/JoseRaimundo27" name="Github" />
          
          </div>
      </div>


      <div className="dashboard">
          <h1>Dashboard</h1>
            <SearchBar/>
        <div className="cards"> 
            <Cards/>

        </div>
  
      </div>
    </div>
  )
}

export default App
