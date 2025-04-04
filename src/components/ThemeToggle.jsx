import { useTema } from '../context/ThemeProvider';
import '../styles/Switch.css';

export default function ThemeToggle() {
  // Puedo tomar de mi contexto el conmutador de temas porque el componente está dentro del proveedor
  // (ThemeProvider contiene a la App, que contiene a Header, que contiene a ThemeToggle)
    const { toggleTheme } = useTema();
  // Aquí no necesito el estado 'theme', sólo lo ocupo en el componente App.
  return (
    <div className="button r" id="button-1">
      {/* Asigno el manejador al evento onClick de mi deslizador */}
        <input onClick={toggleTheme} type="checkbox" className="checkbox" /> 
        <div className="knobs"></div>
        <div className="layer"></div>
    </div>
  )
  // Yo usé un deslizador que copié y adapté, pero podría ser un simple botón.
}
