import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="title">
        <h1>Formularios</h1>
        <p>En esta sección encontrarás ejemplos de formularios en HTML.</p>
      </header>

      <main class="content">
        <Formulario />
      </main>

      <footer>
        <p>© 2025 Formularios. Todos los derechos reservados.</p>
        <p>Desarrollado por Williams Valle</p>
      </footer>

    </>
  )
}

export default App
