import React from "react";

import "./styles.css";

import NavBar from "../../components/NavBar";
import PokemonComponent from "../../components/Pokemon";

function Pokemon() {
  return (
    <div className="header-container">
      <NavBar
        page="pokemon"
      />
      <div id="container-fluid">
        <PokemonComponent />
      </div>
    </div>
  );
}

export default Pokemon;
