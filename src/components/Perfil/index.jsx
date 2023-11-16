import React from 'react'
import naruto from '../../assets/naruto.jfif'

export default function Perfil() {
  return (
    <>
        <div className="logo">
              <img src={naruto} alt="logo" />
              <div className="logo-text">
                <h1>José Santos</h1>
                <h2>Fulltack developer<br />Engenhareiro da Computação</h2>
              </div>
   
      </div>

              
    </>
  )
}
