import React, { createContext, useState } from "react";

const themes = {
  dark: {
    bgPage: '#141414',
    bgHeader: '#030303',
    bgCard: '#454545',
    text: '#fdfdfd',
    hover: '#f48b36'
  },
  light: {
    bgPage: '#ededed',
    bgHeader: '#cbcbcb',
    bgCard: '#ffffff',
    text: '#030303',
    hover: '#f48b36' 
  }
}

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>
    setTheme(theme === 'dark' ? 'light' : 'dark');

  const colors = {
    bgPage: themes[theme].bgPage,
    bgHeader: themes[theme].bgHeader,
    text: themes[theme].text,
    hover: themes[theme].hover,
    bgCard: themes[theme].bgCard
  }

  return (
    <ThemeContext.Provider value={{ colors, theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
};