import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import homesList from '../datas/homesList'
import Arrowback from '../assets/arrow-back.png'
import Arrowfront from '../assets/arrow-front.png'


export default function Carousel() {
    
    const [current, setCurrent] = useState(0)

    const {homeId} = useParams()
    const Logement = homesList.filter(log => log.id == homeId)[0] ?? null

    const Photos = Logement.pictures
    const length = Photos.length

    function next() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function prev() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const carouselPhotos = Photos.map((item, index) =>
    <img src={item} key={item} className='fiche-cover-photo' style={{display: current==index ? 'block' : 'none'}}></img>
    )

    const arrows = 
        <>
            <img src={Arrowback} className='button-prev' onClick={prev}></img>
            <img src={Arrowfront} className='button-next' onClick={next}></img>
        </>
    
    const counter = 
        <>
            <div className="position">
                <p>{current + 1}/{length}</p>
            </div>
        </>

    return (
        <section className="cover-carousel">
            {(<div id='carousel-photo'>
                {carouselPhotos}
                {length>1 ? arrows : ''}
                {length>1 ? counter : ''}
            </div>)}
        </section>
    )
}
