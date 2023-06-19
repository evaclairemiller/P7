import React from 'react'
import { useState } from 'react'
import "../styles/Dropdown.css"
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'

function Dropdown(dropdown) {
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
    <div className='dropdown-bar-closed'>
      <button 
        className='dropdown-button'
        onClick={() => setIsOpen(false)}
      >
        <p>{dropdown.subject}</p>
        <img src={arrowDown} className='arrow-down'></img>
      </button>
    </div>
  ) : (
    <article className='dropdown-bar'>
      <div className='dropdown-bar-open'>
        <button 
          className='dropdown-button'
          onClick={() => setIsOpen(true)}
        >
          <p>{dropdown.subject}</p>
          <img src={arrowUp} className='arrow-up'></img>
        </button>
        <ul className='dropdown-options'>
          <li className='dropdown-option'>{dropdown.option}</li>
        </ul>
      </div>
    </article>
  )
}

export default Dropdown