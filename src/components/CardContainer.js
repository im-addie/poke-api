//imports
import Card from "./Card"

//define helper functions and variables here

function CardContainer(props) {

  const {
    data,
  } = props
  //define state

  //component logic

  return (
    <div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' alt='pokemon logo' style={{width:300}}/>
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
    </div>
  )
}
export default CardContainer
