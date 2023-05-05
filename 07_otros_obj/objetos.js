const datos = {
    nombre:'Eduard',
    apellido: 'Suarez',
    edad: 19,
    altura: 1.77,
    soyDesarrillador: true
};

let edad = datos.edad;

let lista = [{...datos},{nombre:'Steveen',
apellido: 'Rodriguez',
edad: 15,
altura: 1.47,
soyDesarrillador: false},{nombre:'Gabriela',
apellido: 'Castillo',
edad: 20,
altura: 1.70,
soyDesarrillador: true}];

let listaNueva = [...lista];
listaNueva.sort((a,b) => b.edad - a.edad);