import chalk from 'chalk';
import {suma, multiplicacion} from './controllers.js'

console.log(chalk.green(multiplicacion(suma(1,2),suma(4,5))));