//imports
import { useEffect, useState } from "react"
import { capitalize, getAbilities, getTypes, fixNumber } from "../utility/utils"
import { useParams } from "react-router-dom"

//define helper functions and variables here

function PokeInfo(props) {

  const {
    // destructure props
  } = props

  const {pokemonName} = useParams()

  //define state
  const [singleData, setSingleData] = useState(null)

  //component logic

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setSingleData(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])// dependencies array is empty so the fetch request is only run once

  return (
    <div className="single-container">
       {!singleData ? <div>Fetching pokémon data. Please wait...</div>: 
        <div>
          <img src={singleData.sprites.other.dream_world.front_default} style={{height: 125}}/>
          <div className="title">{capitalize(singleData.name)}</div>
          <div className="desc"> <strong> Type: </strong> {getTypes(singleData.types)} </div>
          <div className="desc"><strong> Weight: </strong>{fixNumber(singleData.weight)} kgs</div>
          <div className="desc"><strong>Height: </strong>{fixNumber(singleData.height)} m</div>
          <div className="desc"><strong>Abilities: </strong>{getAbilities(singleData.abilities)} </div>
          <div className="sub-title">Base Stats:</div>
          <div className="desc">HP: {singleData.stats[0].base_stat}</div>
          <div className="desc">Attack: {singleData.stats[1].base_stat}</div>
          <div className="desc">Defense: {singleData.stats[2].base_stat}</div>
          <div className="desc">Special Attack: {singleData.stats[3].base_stat}</div>
          <div className="desc">Special Defense: {singleData.stats[4].base_stat}</div>
          <div className="desc">Speed: {singleData.stats[5].base_stat}</div>
        </div>
      }
    </div>
  )
}
export default PokeInfo