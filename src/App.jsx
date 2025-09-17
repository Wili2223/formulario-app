import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      <Formulario />

      <Footer />

    </>
  )
}

export default App
