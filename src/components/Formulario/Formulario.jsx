import React from 'react'
import './Formulario.css'



function Formulario() {
    return (
        <>
          
            <form id="form-ejemplo" action="">
                <label for="nombre">Nombre</label>
                <input id="nombre" type="text" />

                <label for="email">Gmail</label>
                <input id="email" type="email" />

                <label for="password">Contraseña</label>
                <input id="password" type="password" />

                <label for="edad">Edad</label>
                <input id="edad" type="number" />

                <label for="masculino">M</label>
                <input id="masculino" type="checkbox" />

                <label for="femenino">F</label>
                <input id="femenino" type="checkbox" />

                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje"></textarea>


                <button>Enviar</button>
            </form>
        </>
    )
}

export default Formulario