import React from 'react'
import "../styles/Error.css"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <article>
      <figure>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
      </figure>
      <Link to="/Home">Retourner sur la page d&apos;accueil</Link>
    </article>
  )
}

export default Error