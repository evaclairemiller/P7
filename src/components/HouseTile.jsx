import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HouseTile.css"

function HouseTile(house) {
  return (
    <Link to={'fiche/'+house.id} className='house-tile'>
      <article className='house-tile-article'
        style={{
          backgroundImage: `url(${house.cover})`,
          backgroundSize: `cover`,
          backgroundPosition: `25% 55%`,
          }}>
          <div className='house-tile-gradient'
            style={{
              background: `linear-gradient(transparent 60%, #333333)`
            }}>
          <p className='house-title'>{house.title}</p>
          </div>
      </article>
    </Link>
  )
}

export default HouseTile