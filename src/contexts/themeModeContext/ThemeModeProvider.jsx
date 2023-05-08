import React, { createContext, useEffect, useState } from 'react';

export const ThemeModeContext = createContext();

const ThemeModeProvider = ({children}) => {
     const [darkModeTheme, setDarkModeTheme] = useState(JSON.parse(localStorage.getItem("darkModeTheme")) || false);


     const themeModeToggle = () => {
          setDarkModeTheme(!darkModeTheme)
     }
     useEffect(() => {
          localStorage.setItem("darkModeTheme", darkModeTheme)
     }, [darkModeTheme]);

     const value = {
          themeModeToggle,
          darkModeTheme
     }
     return (
          <ThemeModeContext.Provider value={value}>
               {children}
          </ThemeModeContext.Provider>
     )
};

export default ThemeModeProvider;