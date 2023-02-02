//imports
import Card from "./Card"
import { useEffect, useState } from "react"

//define helper functions and variables here


function CardContainer(props) {

  const {
    data,
  } = props
  //define state

  //component logic

  return (
    <div className="card-container">
      {data.map((element) => {
        return (
          <Card 
          name={element.name}
          url={element.url}
          />
        )
      })}
    </div>
  )
}
export default CardContainer
