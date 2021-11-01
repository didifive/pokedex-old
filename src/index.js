import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { PokemonProvider } from "./providers/pokemon";
import { ThemeProvider } from "./providers/theme";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);