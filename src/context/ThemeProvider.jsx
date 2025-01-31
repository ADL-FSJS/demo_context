/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark'); // ESTADO GLOBAL
    const toggleTheme = () => { // MANEJADOR GLOBAL
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Guardo el estado global y su manejador */}
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext); // Recibir el contexto guardado como 'value'

export default ThemeProvider;
