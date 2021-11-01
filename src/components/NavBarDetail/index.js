import React from "react";
import { Link } from "react-router-dom";

import { NavBarStyles, BackContainer, TitleContainer } from "./styles";

const NavBarDetail = () => {
  return (
    <NavBarStyles className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <BackContainer>
        <Link to="/pokedex">
          <h2>
            <span class="material-icons">
              ad_units
            </span>
          </h2>
        </Link>
      </BackContainer>
      <TitleContainer className="title-container">
        <h1>Pokemon Details</h1>
      </TitleContainer>
    </NavBarStyles>
  );
};

export default NavBarDetail;
