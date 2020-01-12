import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterComponent from './components/CharacterComponent';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const characterData = () => {
      axios
        .get("https://swapi.co/api/people/")
        .then(response => {
          console.log(response);
          setCharacters(response.data.results);
        })
        .catch(err => {
          console.log(err);
        })
    }
    characterData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {characters.map((item, index) => {
          return <CharacterComponent key={`${item.name}-${index}`} character={item} eye_color={item.eye_color} />
        })}
      </div>
    </div>
  );
}


