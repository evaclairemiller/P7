import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Fiche.css'
import DropDown from '../components/Dropdown'
import homesList from '../datas/homesList'
import Error from '../components/Error'
import Carousel from '../components/Carousel'

function Fiche() {
    const {homeId} = useParams()
    const Logement = homesList.filter(log => log.id == homeId)[0] ?? null

    const Tags = Logement.tags
    const tagItems = Tags.map((item) =>
    <li key={item.id} className='tag-item'>{item}</li>
    );

    const Equpiments = Logement.equipments
    const listItems = Equpiments.map((item) =>
    <li key={item.id} className='equipment-option'>{item}</li>
    );

    if (!Logement) {return <Error />}

    return (
        <section className='fiche-complet'>
            {/*<img src={Logement.cover} className='fiche-cover-photo'></img>*/}
            <Carousel />
            <article className='fiche-infos'>
                <article className='fiche-primary-infos'>
                    <h1>{Logement.title}</h1>
                    <p className='fiche-location'>{Logement.location}</p>
                    {(<ul className='tag-option-list'>{tagItems}</ul>)}
                </article>
                <article className='fiche-secondary-infos'>
                    <figure className='fiche-host-infos'>
                        <p className='fiche-host-name'>{Logement.host.name}</p>
                        <img src={Logement.host.picture} className='fiche-host-photo'></img>
                    </figure>
                    <figure className='fiche-rating'>
                    </figure>
                </article>
            </article>
            <article className='fiche-dropdowns'>
                <DropDown
                    subject={`Description`}
                    option={Logement.description}
                />
                <DropDown
                    subject={`Équipements`}
                    option={(<ul className='equipment-option-list'>{listItems}</ul>)}
                />
            </article>
        </section>
    )
}

export default Fiche
