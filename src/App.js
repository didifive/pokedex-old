import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from './providers/theme'

import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <ThemeContext.Consumer>
        {({ colors }) =>
          <div style={{ backgroundColor: colors.bgPage, color: colors.text }}>
            <Route path="/" exact component={Pokedex} />
            <Route path="/pokedex" exact component={Pokedex} />
            <Route path="/pokemon/:pokemonIndex" exact component={Pokemon} />
          </div>
        }
      </ThemeContext.Consumer>
    </BrowserRouter>
  );
}

export default App;