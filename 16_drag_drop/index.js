const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover",event=>{
    event.preventDefault()
})
papelera.addEventListener("drop",event=>{
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",event =>{
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend",()=>{
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover",event =>{
        event.preventDefault()
    })
    seccion.addEventListener("drop",event =>{
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo =document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})