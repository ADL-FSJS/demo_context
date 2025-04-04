import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    // Nada que ver aquí. Ven cómo nos salvamos del prop drilling?
    // En este componente no tengo acceso al contexto, pero tampoco lo necesito.
    <header>
        <h1>Tema dinámico</h1>
        <ThemeToggle />
    </header>
  )
}
