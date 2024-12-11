import React, { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      // console.log(res.data.results) el array de personajes
      setCharacters(res.data.results); //modificar characters y pasarle los personajes que han venido de la API
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div>
            {character.name}
            <img src={character.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
