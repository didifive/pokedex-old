import React, { useContext } from "react";

import { PokemonContext } from '../../providers/pokemon';

const PokemonFavorite = ({pokemon}) => {

  const { updatePokemon } = useContext(PokemonContext);
  
  const handleFavoriteClick = () => {
    localStorage.getItem(`favorite${pokemon.id}`) === `favorite${pokemon.id}`  ?
      localStorage.removeItem(`favorite${pokemon.id}`) :
      localStorage.setItem(`favorite${pokemon.id}`, `favorite${pokemon.id}`)
    updatePokemon(pokemon)
  }

  return (
    <img
      alt={
        localStorage.getItem(`favorite${pokemon.id}`) ?
        'Pokemon favorite' :
        'Pokemon not favorite'
      }
      src={
        localStorage.getItem(`favorite${pokemon.id}`) ?
          '/icons/favorite.png' :
          '/icons/not_favorite.png'
      }
      onClick={handleFavoriteClick}
    />
  )
}

export default PokemonFavorite;