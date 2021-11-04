import React, { useState, useContext } from "react";
import { Pokeball } from "../Spinner";
import PokemonCard from "../PokemonCard";
import Search from "../Search";

import { App } from "./styles";
import { PokemonContext } from "../../providers/pokemon";

const PokemonList = () => {
  const [query, setQuery] = useState("");
  const { pokemons } = useContext(PokemonContext);

  const renderPokemonsList = () => {
    const pokemonsList = [];

    pokemons.forEach((pokemon) => {
      pokemon.name.includes(query) &&
      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
  };

  if (!pokemons.length) return <Pokeball />

  return  (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <App>
        {renderPokemonsList()}
      </App>
    </>
  );
};

export default PokemonList;