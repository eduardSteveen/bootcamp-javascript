let nombre = "Eduard";
let apellido = "Suarez";

const persona = {
    nombre,
    apellido
}

sessionStorage.setItem("usuario",JSON.stringify(persona));
localStorage.setItem("usuario",JSON.stringify(persona));
document.cookie = `usuario=${localStorage.getItem("usuario")};max-age=120`;