import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {

  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then( response => {
        setCharacters(response.data);
      })
      .catch( e => {
        console.log("error getting characters from the API...", e);
      });
  }, []);


  return (
    <>
      
      <Header />

      { characters === null 
        ? <h2>loading...</h2> 
        : <h2>Number of Characters in the API: {characters.length}</h2>
      }
      

      { characters?.map( (characterDetails, index) => {
        return(
          <div key={index} className='card'>
            <p>Name: {characterDetails.name}</p>
            <p>Occupation: {characterDetails.occupation}</p>
            <p>Weapon: {characterDetails.weapon}</p>
          </div>
        );
      })}

    </>
  )
}

export default App
