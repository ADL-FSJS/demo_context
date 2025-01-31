import Header from "./components/Header";
import { useTheme } from "./context/ThemeProvider";
import './styles/Themes.css';


export default function App() {
  const { theme } = useTheme(); // Puedo tomar 'theme' del contexto porque la app está dentro del proveedor

  return (
    <main className={theme}> {/* theme responde a los cambios de estado */}
      <Header />
      <div id="underHeader">
        <p id="centerP">Tremendo contexto</p>
      </div>
    </main>
  );
}