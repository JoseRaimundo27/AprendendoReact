import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Perfil from './components/Perfil'
import Logo from './components/Logo'

import './App.css'

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
  
      </div>
    </div>
  )
}

export default App
