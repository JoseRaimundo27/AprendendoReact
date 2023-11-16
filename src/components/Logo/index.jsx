import React from 'react';
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
// Como criar Props para mudar a tag de icone?
// Estudar userSTATES
export default function Logo({href, name}) {
  return (
    <div className="logo-wrapper">
        <a href={href} target="_blank" className="nav-link">
            <FaGithub/>
            <span>{name}</span>
        </a>
    </div>
  )
}
