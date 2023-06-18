import React from 'react'
import "../styles/HouseTile.css"

function HouseTile({ title, cover }) {
  return (
    <article 
      className='house-tile' 
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: `150%`,
        backgroundPosition: `25% 55%`,
        }}>
        <div className='house-tile-gradient'
          style={{
            background: `linear-gradient(transparent 60%, #333333)`
          }}>
        {/*<img src={cover}></img>*/}
        <p className='house-title'>{title}</p>
        </div>
    </article>
  )
}
HouseTile.propTypes = {
  title: String,
  cover: String,
}

export default HouseTile