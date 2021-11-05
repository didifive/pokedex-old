import React, { useState, useContext } from "react";
import { Pokeball } from "../Spinner";
import { Pagination } from "semantic-ui-react";
import PokemonCard from "../PokemonCard";
import Search from "../Search";

import { App, PaginationContainer } from "./styles";
import { PokemonContext } from "../../providers/pokemon";

const PokemonList = () => {
  const [query, setQuery] = useState("");
  const { 
    currentPage,
    isLoading,
    pokemonPerPage,
    pokemons, 
    setCurrentPage,
    setIsLoading,
    totalPages
   } = useContext(PokemonContext);

  const renderPokemonsList = () => {
    const pokemonsList = [];

    pokemons.forEach((pokemon) => {
      pokemon.name.includes(query) &&
      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
  };

  const onPaginationClick = (e, pageInfo) => {
    setIsLoading(true);
    setCurrentPage(pageInfo.activePage * pokemonPerPage - pokemonPerPage);
  };


  if (!pokemons.length || isLoading) return <Pokeball />

  return  (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      
      <PaginationContainer>
        <Pagination
          defaultActivePage={Math.ceil(currentPage/pokemonPerPage)+1}
          totalPages={totalPages}
          onPageChange={onPaginationClick}
        />
      </PaginationContainer>

      <App>
        {renderPokemonsList()}
      </App>
    </>
  );
};

export default PokemonList;