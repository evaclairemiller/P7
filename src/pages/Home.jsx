import React from 'react'
import homesList from '../datas/homesList'
import CoverPhoto from '../components/CoverPhoto'
import photo1 from '../assets/photo1.jpeg'
import HouseTile from '../components/HouseTile'
import '../styles/Home.css'

function Home() {
  const coverTextBreak = <p>Chez vous, <span className='text-break'>partout et ailleurs</span></p>
  return (
    <div>
      <CoverPhoto
        photo={photo1}
        coverText={coverTextBreak}
      />
      <section className='house-tiles'>
        {homesList.map(({ id, title, cover }) => (
          <HouseTile 
            key={id}
            id={id}
            cover={cover}
            title={title}
          />
        ))}
      </section>
    </div>
    )
}

export default Home
