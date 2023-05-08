$(()=>{
    $("#btn").click(()=>{
        alert("click en el boton")
        console.log("Hola, estoy utilizando jQuery")
    })
})

const boton = document.querySelector("#btn")

boton.addEventListener("click", ()=>{
    alert("click en el boton")
})
