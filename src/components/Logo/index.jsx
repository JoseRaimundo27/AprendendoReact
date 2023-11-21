import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "../../assets/css/style-logo.css"

function tagByName(name) {
  if (name == "Github") {
    return <FaGithub style={{
      height: '40px',
      width: "40px"
    }} />
  } else if (name == "Linkedin") {
    return <FaLinkedinIn style={{
      height: '40px',
      width: "40px",
     
    }} />;
  } else if (name == "Whatssap") {
    return <FaWhatsapp style={{
      height: '40px',
      width: "40px"
    }} />;
  }

}
export default function Logo(props) {
  return (
    <div className="logo-wrapper">
      <a href="{props.href} "  className="nav-link-icon">
        <div className="icon">
          <i className="icon">{tagByName(props.name)}</i>
        
        </div>
  
      </a>
      <a href={props.href} target="_blank" className="nav-link">

        <span>{props.name}</span>
      </a>
    </div>
  )
}
