function secuencia(a){
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    const resultado = [1,1];

    for(let i = 2;i<a;i++){
        resultado.push(resultado[i-1]+resultado[i-2]);
    } 
    return resultado
}

console.log(secuencia(6))