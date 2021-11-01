import React, { createContext, useState } from "react";

const themes = {
  dark: '#000',
  light: '#fff'
}

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
};