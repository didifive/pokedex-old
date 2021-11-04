import React, { useContext } from "react";

import { PokemonContext } from '../../providers/pokemon';

const PokemonCaught = ({pokemon}) => {

  const { updatePokemon } = useContext(PokemonContext);
  
  const handleCaughtClick = () => {
    localStorage.getItem(`caught${pokemon.id}`) === `caught${pokemon.id}`  ?
      localStorage.removeItem(`caught${pokemon.id}`) :
      localStorage.setItem(`caught${pokemon.id}`, `caught${pokemon.id}`)
    updatePokemon(pokemon)
  }

  return (
    <img
      alt={
        localStorage.getItem(`caught${pokemon.id}`) ?
        'Pokemon caught' :
        'Pokemon not caught'
      }
      src={
        localStorage.getItem(`caught${pokemon.id}`) ?
          '/icons/caught.png' :
          '/icons/not_caught.png'
      }
      onClick={handleCaughtClick}
    />
  )
}

export default PokemonCaught;