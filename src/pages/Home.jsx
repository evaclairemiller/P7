import React from 'react'
import Header from '../components/Header'
import CoverPhoto from '../components/CoverPhoto'
import photo1 from '../assets/photo1.jpeg'

function Home() {
  return (
    <div>
      <Header />
      <CoverPhoto>
        <img src={photo1} alt='Cover photo, home page' className=''>
          <p>Chez vous, partout et ailleurs</p>
        </img>
      </CoverPhoto>
    </div>
    )
}

export default Home
