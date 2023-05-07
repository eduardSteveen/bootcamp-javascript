const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ]
});

function mensajeError(){
    throw new Error("mensaje personalizado");
}

try{
    mensajeError();
}catch(e){
    logger.error(`el error registrado es ${e}`)
}