let resultado = 1;
let i = 1;

buclef: while(true){
    resultado = resultado * i;
    if (i ===10) {
        break buclef;
    }else{
        i++;
    }
}

console.log(resultado);