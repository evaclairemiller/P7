import React from 'react'
import "../styles/CoverPhoto.css"

function CoverPhoto(photo) {
  return (
    <figure className='cover-photo'>
      <img src={photo}></img>
      <p>{photo.photoText}</p>
    </figure>
  )
}

export default CoverPhoto