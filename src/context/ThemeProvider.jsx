/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext();
/* Necesito este contexto para dos cosas:
  1. Instanciar mi proveedor de contexto (ThemeProvider) y envolver mi app con él. -- Ver línea 18
  2. Acceder al contexto (consumirlo) desde fuera, mediante useContext() -- Ver línea 24
*/

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark'); // ESTADO (aún local)
    const toggleTheme = () => { // MANEJADOR (aún local)
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Guardo y GLOBALIZO el estado y su manejador */}
        {children}
    </ThemeContext.Provider>
  )
}

export const useTema = () => useContext(ThemeContext); // Recibir (CONSUMIR) el contexto guardado como 'value'

export default ThemeProvider;
