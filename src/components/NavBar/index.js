import React from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from '../../providers/theme';

import { NavBarStyles, BackContainer, TitleContainer } from "./styles";



const NavBar = (props) => {

  const { page } = props;

  return (
    <ThemeContext.Consumer>
        {({ colors, theme, toggleTheme }) =>
          <NavBarStyles
            className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top "
            bgColor={colors.bgHeader}
          >
            {page === 'pokemon' && 
              <BackContainer
                textColor={colors.text}
                hoverColor={colors.hover}
              >
                <Link to="/">
                  <h2>
                    <span className="material-icons">
                      arrow_circle_left
                    </span>
                  </h2>
                </Link>
              </BackContainer>
            }
            <TitleContainer
              className="title-container"
              textColor={colors.text}
            >
              {page === 'pokemon' ?
                <h1>Pokemon Details</h1> :
                <h1>My Pokedex</h1>
              }
            </TitleContainer>
            <BackContainer
              textColor={colors.text}
              hoverColor={colors.hover}
            >
              <h2 onClick={toggleTheme} >
                <span className="material-icons">
                  {theme === 'dark' ? 
                    'light_mode' : 
                    'dark_mode'
                  }
                </span>
              </h2>
            </BackContainer>
          </NavBarStyles>
        }
    </ThemeContext.Consumer>
  );
};

export default NavBar;
