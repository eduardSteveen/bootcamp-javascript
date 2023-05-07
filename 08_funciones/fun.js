function siempreTrue(){
    return true;
}

async function promesa(){
    return setTimeout(()=> console.log("hola soy una promesa"),5000);
}

function* indices(){
    let id = 0;
    while(true){
        id +=2;
        yield id;
    }
}