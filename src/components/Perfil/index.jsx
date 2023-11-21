import React from 'react'
import naruto from '../../assets/naruto.jfif'

export default function Perfil() {
  return (
    <>
        <div className="logo">
              <img src={naruto} alt="logo" />
              <div className="logo-text">
                <h1>José Santos</h1>
                <h2>Fullstack developer<br />Engenheiro da Computação</h2>
              </div>
   
      </div>

              
    </>
  )
}
