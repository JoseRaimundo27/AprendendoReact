import React from 'react'
import naruto from '../../assets/naruto.jfif'

export default function Perfil() {
  return (
    <>
        <div className="logo">
              <img src={naruto} alt="logo" />
            </div>
            <div className="nome">
              <h1>José Santos</h1>
            </div>
            <div className="funcao">
              <h2>Fulltack developer</h2>
            </div>
    </>
  )
}
