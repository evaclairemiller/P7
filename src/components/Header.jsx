import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='kasa-banner'>
      <Link to="/Home"><img src={logo} className='kasa-logo'></img></Link>
      <nav className="nav-banner">
        <Link to="/Home">Acceuil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
