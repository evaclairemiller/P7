import React from 'react'
import "../styles/CoverPhoto.css"

function CoverPhoto(cover) {
  return (
    <figure className='cover-photo' style={{
      backgroundImage: `url(${cover.photo})`
      }}>
      <div className='cover-photo-gradient'
      style={{
        background: `rgb(51, 51, 51, 0.4)`
      }}>
      <div>{cover.coverText}</div>
      </div>
    </figure>
  )
}

export default CoverPhoto