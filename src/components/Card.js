//imports
import { useEffect, useState } from "react"
import { capitalize, getTypes } from "../utility/utils"
import { Route, Link } from "react-router-dom"
import PokeInfo from "./PokeInfo"

//define helper functions and variables here

function Card(props) {
  
  const {
  name,
  url
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
      <Link to={`/pokemon/${pokeData?.id}`} element={<PokeInfo />}>
      {!pokeData ? <div>Fetching data. Please wait...</div>: 
      <div>  
        <img src={pokeData.sprites.other.dream_world.front_default} style={{height: 125}}/>
        <div className="title">{capitalize(pokeData.name)}</div>
        <div className="desc">Type: {getTypes(pokeData.types)} </div>
      </div>
      }
      </Link>
    </div>
  )
}
export default Card
