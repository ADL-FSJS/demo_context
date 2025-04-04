import Header from "./components/Header";
import { useTema } from "./context/ThemeProvider";
import './styles/Themes.css';


export default function App() {
  // Puedo tomar 'theme' del contexto porque la app está dentro del proveedor
  // (ver componente main.jsx)
  const { theme } = useTema(); 

  return (
    <main className={theme}>
      {/* el estado 'theme' responde a los cambios disparados por el botón en el Header 👍🏼*/} 
      <Header />
      <div id="underHeader">
        <p id="centerP">Tremendo contexto</p>
      </div>
    </main>
  );
}