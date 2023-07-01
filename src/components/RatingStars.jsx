import React from 'react'
import StarPink from '../assets/star-pink.svg'
import StarGrey from '../assets/star-grey.svg'

function RatingStars(stars) {

    let lastElement
    for (lastElement in stars)
    (stars[lastElement])

    const fullStars = Array.from({length: (stars[lastElement])})
    const emptyStars = Array.from({length: (5 - (stars[lastElement]))})
    
    return (
    <div>
        {fullStars.map(() => (
          <img
            key={stars}
            src={StarPink}
          />
        ))}
        {emptyStars.map(() => (
          <img
            key={stars}
            src={StarGrey}
          />
        ))}
        
      </div>
    )

}

export default RatingStars
