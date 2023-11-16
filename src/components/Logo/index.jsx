import React from 'react';
import { FaGithub } from "react-icons/fa";
export default function Logo({href, name}) {
  return (
    <div className="logo-wrapper">
        <a href={href} className="nav-link">
            <FaGithub />
            <span>{name}</span>
        </a>
    </div>
  )
}
