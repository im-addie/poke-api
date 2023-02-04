import './App.css';
import "./components/Card.css"
import CardContainer from './components/CardContainer';
import PokeInfo from './components/PokeInfo'
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parses the response data
      })
      .then(result => setData(result.results)) // result is now data
      .catch(err => err) // return the error
    }, [])// dependencies array is empty so the fetch request is only run once

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardContainer data={data}/>} />
        <Route path="/pokemon/:pokemonName" element={<PokeInfo />} />
      </Routes>
    </div>
  );
}

export default App;
