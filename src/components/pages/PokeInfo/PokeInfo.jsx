/* eslint-disable react-hooks/exhaustive-deps */
import './PokeInfo.css'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const PokeInfo = () => {

  const [pokemon,setpokemon] = useState([]);
  let { pokeid } = useParams()
  const url = "https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {
    const get_url_data = async () => {
      setpokemon((await axios.get(url+pokeid)).data);
    };
    get_url_data();
  
  }, []);

  if (!pokemon.id) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
    }

  return (
    <section>
      <div>
        <Link to='/' className='returnArrow'><h1>{'<'}</h1></Link>
        <h1>Pokedex</h1>
      </div>
      <div>
        <div className='pokeImg'>
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
        </div>
        <div className='pokeInfo'>
          <div>
            <p>{pokemon.id}</p>
          </div>
          <div>
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.types[0].type.name}</p>
            <div className='pokeDisplay'>
            <div className='pokeStats'>
              <p> <p className='boldText'>Stats:</p> {pokemon.stats.map((item, index) => {
                return (
                  <p key={index}>{item.stat.name}:{item.base_stat}</p>
                  )
                })}</p>
            </div>
            <div className='pokeAbilities'>
              <p> <p className='boldText'>Abilities:</p> {pokemon.abilities.map((item, index) => {
                return (
                  <p key={index}>{item.ability.name}</p>
                  )
                })}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default PokeInfo
