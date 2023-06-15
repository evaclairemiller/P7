import React from 'react'
import '../styles/Footer.css'
import logoWhite from '../assets/logo-white.svg'

function Footer() {
    return (
      <footer className='kasa-footer'>
        <img src={logoWhite} className='footerLogo'></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
export default Footer
