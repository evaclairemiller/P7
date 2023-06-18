import React from 'react'
import "../styles/HouseTile.css"

function HouseTile({ title, cover }) {
  return (
    <article className='house-tile'>
      <img src={cover}></img>
      <p className='house-title'>{title}</p>
    </article>
  )
}
HouseTile.propTypes = {
  title: String,
  cover: String,
}

export default HouseTile