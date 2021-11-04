import React, { useContext } from "react";

import { ThemeContext } from '../../providers/theme';

import PokemonFavorite from "../Favorite";
import PokemonCaught from "../Caught"

import {
  Card,
  StyledLink,
  CardName,
  CardImg,
  CardDetails,
  CardId,
  Container,
  Menu
} from "./styles";

const PokemonCard = ({ pokemon }) => {
  const nameCapitalized = pokemon.name.split("-")[0];
  
  const { colors } = useContext(ThemeContext);

  const pokemonType = pokemon.types.map(
    ({ type }) => type.name[0].toUpperCase() + type.name.slice(1)
  );

  return (
    <Container>
      <StyledLink to={`pokemon/${pokemon.id}`}>
        <Card 
          className={pokemonType[0]}
          bgCard={colors.bgCard}
          textColor={colors.text}
        >
          <CardId
            className={pokemonType[0]}
          ># {pokemon.id}</CardId>
          <CardImg
            src={pokemon.image}
            alt={nameCapitalized}
            style={{ display: "block" }}
          />
          <CardName>{nameCapitalized}</CardName>
          <CardDetails>{pokemonType.join(" / ")}</CardDetails>
        </Card>
      </StyledLink>
      <Menu>
      <PokemonCaught 
          pokemon={pokemon}
        />
        <PokemonFavorite 
          pokemon={pokemon}
        />
      </Menu>
    </Container>
  );

};

export default PokemonCard;