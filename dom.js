
document.querySelector("h1").style.color = "red";

document.querySelector("label[for='nombre']").style.color = "blue";
const form = document.getElementById("form-ejemplo");
form.addEventListener("submit", e => {
  e.preventDefault();
    const datos = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        edad: document.getElementById("edad").value,
        mensaje: document.getElementById("mensaje").value,
        
    };
  alert(`Datos enviados:\n${JSON.stringify(datos, null, 2)}`);
  form.reset();
});

const btn = document.createElement("button");
btn.type = "button"; 
btn.textContent = "Cambiar fondo";


const botonEnviar = form.querySelector("button[type='submit']");

form.insertBefore(btn, botonEnviar);

btn.addEventListener("click", () => {
  form.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});


