import React, { createContext, useCallback, useEffect, useState } from 'react'
import api, { getPokemonImageUrl } from '../services/api';
import axios from 'axios';

export const PokemonContext = createContext();

export const PokemonProvider = props => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonPerPage] = useState(20);
  const [totalPokemon] = useState(807);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const totalPages = Math.ceil(totalPokemon / pokemonPerPage);

  const fetchPokemonsDetails = async (pokemons) => {
    for (const pokemon of pokemons) {
      const { data } = await axios.get(pokemon.url)

        pokemon.id = data.id
        pokemon.types = data.types
        pokemon.image = getPokemonImageUrl(data.id)
    }
    setPokemons([...pokemons]);

    setIsLoading(false);
  };

  const updatePokemon = pokemon => {
    const index = pokemons.findIndex(({ id }) => id === pokemon.id)
    pokemons[index] = pokemon
    setPokemons([...pokemons]);
  }

  const fetchPokemons = useCallback(
    async () => {
      const { data } = await api.get(
        `/pokemon?limit=
          ${(currentPage + pokemonPerPage) > totalPokemon ?
          (totalPokemon - currentPage) :
          pokemonPerPage
          }
          &offset=${currentPage}
        `
      )
      fetchPokemonsDetails(data.results);
    },
    [currentPage, pokemonPerPage, totalPokemon]
  );

  useEffect(() => {
    if(!pokemons.length) fetchPokemons();
  });

  useEffect(() => {
    fetchPokemons();
  },[currentPage, fetchPokemons]);

  return (
    <PokemonContext.Provider 
      value={{
        currentPage,
        isLoading,
        pokemonPerPage,
        pokemons,
        setCurrentPage,
        setIsLoading,
        totalPages, 
        updatePokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  )
};