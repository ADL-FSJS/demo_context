import { useTheme } from '../context/ThemeProvider';
import '../styles/Switch.css';

export default function ThemeToggle() {
    const { toggleTheme } = useTheme(); // Puedo tomar de mi contexto el manejador de temas porque el componente está dentro del proveedor
  return (
    <div className="button r" id="button-1">
        <input onClick={toggleTheme} type="checkbox" className="checkbox" /> {/* Asigno el manejador al evento onClick */}
        <div className="knobs"></div>
        <div className="layer"></div>
    </div>
)
}
