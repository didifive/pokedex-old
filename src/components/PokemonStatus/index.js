import React, { useContext, useState  } from "react";

import { ThemeContext } from '../../providers/theme';

const PokemonStatus = (props) => {

  const {pokemonStatus, pokemonId} = props;

  const[toggle,setToggle] = useState(false);

  const { theme } = useContext(ThemeContext);
  
  const handleClick = (pokemonStatus,pokemonId) => {
    localStorage.getItem(`${pokemonStatus}${pokemonId}`) ?
      localStorage.removeItem(`${pokemonStatus}${pokemonId}`) :
      localStorage.setItem(`${pokemonStatus}${pokemonId}`, `${pokemonStatus}${pokemonId}`)

      !toggle ? setToggle(true) : setToggle(false)
  }

  return (
    <img
      alt={
        localStorage.getItem(`${pokemonStatus}${pokemonId}`) ?
        `Pokemon ${pokemonStatus}` :
        `Pokemon not ${pokemonStatus}`
      }
      src={
        localStorage.getItem(`${pokemonStatus}${pokemonId}`) ?
          `/icons/${pokemonStatus}.png` :
          `/icons/not_${pokemonStatus}_${theme}.png`
      }
      onClick={() => handleClick(pokemonStatus,pokemonId)}
    />
  )
}

export default PokemonStatus;