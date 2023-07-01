import React from 'react'
import { useParams } from 'react-router-dom'
import homesList from '../datas/homesList'
import Arrowback from '../assets/arrow-back.png'
import Arrowfront from '../assets/arrow-front.png'

{/** COMMENTAIRES @PARAM ?? */}

let index = 0
let max = 0

function prev() {
    index--
    if (index < 0) {
        index = max - 1
    }
    goto(index)
}

function next() {
    index++
    if (index >= max) {
        index=0
    }
    goto(index)
}

function goto(number) {
    const images = document.querySelectorAll('.fiche-cover-photo')
    images.forEach(image => {
        image.style.display = 'none'
    })
    images[number].style.display = 'block'
}

function Carousel() {
    const {homeId} = useParams()
    const Logement = homesList.filter(log => log.id == homeId)[0] ?? null

    const Photos = Logement.pictures
    const carouselPhotos = Photos.map((item, index) =>
    <img src={item} key={item.id} className='fiche-cover-photo' style={{display: index==0 ? 'block' : 'none'}}></img>
    )
    max = carouselPhotos.length

    return (
        <section className="cover-carousel">
            {(<div id='carousel-photo'>
                <img src={Arrowback} className='button-prev' onClick={prev}></img>          
                <img src={Arrowfront} className='button-next' onClick={next}></img>
                {carouselPhotos}
                <div className="position">
                    <p>1/{Photos.length}</p>
                </div>
            </div>)}
        </section>
    )
}

export default Carousel