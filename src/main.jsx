import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import ThemeProvider from './context/ThemeProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/* IMPORTANTE: No consumir el contexto fuera del proveedor.
      Envuelvo la App entera porque quiero acceder a mi contexto desde la capa más externa de App.jsx */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
