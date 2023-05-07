class estudiante {
    nombre
    asignatura = ['javaScript','html','css']

    constructor(nombre){
        this.nombre=nombre
    }

    optendatos(){
        return {nombre:this.nombre, asignatura: this.asignatura}
    }
}

const new_estudiante = new estudiante("Eduard")

console.log(new_estudiante.optendatos());
