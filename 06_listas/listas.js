const compra = ['arroz','pasta','carne','sal','tomate'];
compra.push('aceite de girasol');
compra.pop();
const peliculas = [
    {titulo:'Rapido y furioso', director:'rob cohen',fecha: new Date(2001,10,1)},
    {titulo:'end game', director:'joe russo',fecha: new Date(2019,3,25)},
    {titulo:'Raiders of the Lost Ark', director:'Steven Spielberg',fecha: new Date(1981,11,25)}
];
const peliculas2 = peliculas.filter(pelicula => pelicula.fecha >= new Date(2010,0,1));
const directores = peliculas.map(dir => `${dir.director}`);
const nombre = peliculas.map(nom => `${nom.titulo}`);
const union = directores.concat(nombre);
const union2 = [...directores,...nombre];