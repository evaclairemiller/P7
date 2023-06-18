import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import logoWhite from '../assets/logo-white.svg'

function Footer() {
    return (
      <footer className='kasa-footer'>
        <Link to="/"><img src={logoWhite} className='kasa-logo-footer'></img></Link>
        <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
export default Footer
