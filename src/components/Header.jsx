import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='kasa-banner'>
      <Link to="/"><img src={logo} className='kasa-logo-banner'></img></Link>
      <nav className="nav-banner">
        <Link to="/">Acceuil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
