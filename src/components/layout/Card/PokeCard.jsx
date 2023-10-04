/* eslint-disable react/prop-types */
import './PokeCard.css'
import {Link} from 'react-router-dom'

export const PokeCard = ({pokemon}) => {

let type = pokemon.types[0].type.name

  return (
    <main>
      <div className="card">
      <div className="top-section">
        <div className="desing-top"></div>
        <div className="icons">
          <div className="logo">
            <h1 className='pokeID'>{pokemon.id}</h1>
          </div>
          <div className="social-media">
            <h1 className='pokeType'>Type: {type.charAt(0).toUpperCase() + type.slice(1) }</h1>
          </div>
        </div>
        <div className="photo">
          <div className="img">
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <span className="title">{pokemon.name}</span>
      </div>
      <div className="bottom-btn">
        <Link to={`/pokemoninfo/${pokemon.id}`}><button className='btn-info'>See more information</button></Link>
      </div>
    </div>
    </main>
  )
}