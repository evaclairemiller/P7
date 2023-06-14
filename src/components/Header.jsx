import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header>
      <img src={logo}></img>
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
