//imports
import { useEffect, useState } from "react"
import { capitalize } from "../utility/utils"

//define helper functions and variables here

const getTypes = (typeArray) => {
  let types = typeArray.map((element) => {
    return capitalize(element.type.name)
  })
  return types.join(', ')
}

const getAbilities = (abilityArray) => {
  let abilities = abilityArray.map((element) => {
    return capitalize(element.ability.name)
  })
  return abilities.join(', ')
}

function Card(props) {
  
  const {
  name,
  url,
  } = props
  
  //define state
  const [pokeData, setPokeData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        } 
        return response.json() // parse the response data
      }) 
      .then(result => setPokeData(result)) // set state when the data received
      .catch(err => err) // return the error
    }, []) 

  //component logic

  return (
    <div className="card">
      {!pokeData ? <div>Fetching data. Please wait...</div>: 
      <div>  
        <img src={pokeData?.sprites?.front_default}/>
        <div className="title">{capitalize(pokeData.name)}</div>
        <div className="desc">Type: {getTypes(pokeData.types)} </div>
        <div className="desc">Weight: {pokeData.weight}</div>
        <div className="desc">Height: {pokeData.height}</div>
        <div className="desc">Abilities: {getAbilities(pokeData.abilities)} </div>
      </div>
      }

    </div>
  )
}
export default Card
