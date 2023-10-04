/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import './Home.css'
import { useState, useEffect, useContext} from 'react'
import axios from 'axios';
import { PokeCard } from '../../layout/Card/PokeCard';

const Home = () => {

const [pokeData,setPokeData] = useState( [] );

useEffect(() => {

},[])


  const url = "https://pokeapi.co/api/v2/pokemon/"

  const pokeFun=async()=>{
    const res=await axios.get(url);
    getPokemon(res.data.results)
  }
  
  const getPokemon=async(res)=>{
    res.map(async(item)=>{
      const result=await axios.get(item.url)
      setPokeData(state=>{
        state=[...state,result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      })
    })   
  }
  
  useEffect(()=>{
    pokeFun();
  }, [url]);
  
  useContext

  return (
    <main className='HomeMain'>
      <div className='MainTitle'>
        <h1>POKEDEX</h1>
      </div>
      <div className='Cards'>
        {
          pokeData.map((item, index) => {
            return (
              <PokeCard pokemon={item} key={index} />
            )
          })
        }
      </div>
    </main>
  )
}

export default Home