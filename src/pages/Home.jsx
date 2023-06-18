import React from 'react'
import homesList from '../datas/homesList'
import CoverPhoto from '../components/CoverPhoto'
import photo1 from '../assets/photo1.jpeg'
import HouseTile from '../components/HouseTile'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <CoverPhoto
        photo={photo1}
        photoText='Chez vous, partout et ailleurs' 
      />
      <ul className='house-tiles'>
        {homesList.map(({ id, title, cover }) => (
          <HouseTile 
            key={id}
            photo={cover}
            title={title}
          />
        ))}
      </ul>
    </div>
    )
}

export default Home
