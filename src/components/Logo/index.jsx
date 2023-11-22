import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "../../assets/css/style.css"


export default function Logo(props) { 
  const [icone, setIcone] = useState([
    {id:1, icone:<FaGithub size={20}/>, link:"https://github.com/JoseRaimundo27", media:"Github"},
    {id:2 , icone:<FaLinkedinIn  size={20}/> ,link:"https://www.linkedin.com/in/jos%C3%A9-alves-41a8a5283/", media: "Linkedin"},
    {id:3, icone: <FaWhatsapp size={20}/>, media: "Linkedin"}
  ]);

  return (
    <div className="logo-wrapper">
    {icone.map(e=>{
      return(
      <>
        <a href={e.link} className="icone"  key={e.id}>
          <span >
            {e.icone}
          </span>
          <span>
            {e.media}
          </span>
        </a>
      </>
      );
    })}
      
    </div>
  )
}
