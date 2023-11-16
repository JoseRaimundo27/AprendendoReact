import { useState } from 'react'
import Perfil from './components/Perfil'
import Logo from './components/Logo'
import Cards from './components/Cards'
import './assets/css/style.css'

function App() {

  return (
    <div className="container">
      <div className="card">
          <div className="perfil">
            <Perfil/>
          </div>

          <div className="logos">
            <Logo href= "https://github.com/JoseRaimundo27" name="Github"/>
            <Logo href="https://github.com/JoseRaimundo27" name="Linkedin"/>
          </div>
      </div>


      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="cards"> 
            <Cards/>

        </div>
  
      </div>
    </div>
  )
}

export default App
