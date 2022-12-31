import colors from 'colors';


//import { mostrarMenu, pausa } from './helpers/mensaje.js';
// import * as inquirer from './helpers/inquirer.js';
import {
    inquirerMenu, pausa, leerInput
} from './helpers/inquirer.js';
import {Tareas} from './models/tareas.js';

console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    do{
        // opt = await mostrarMenu();
        // opt = await inquirer.inquirerMenu(); // This for when you use import * as ...
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;
            case '2':
                console.log(tareas._listado);
            break;
        }

        if(opt !== '0') await pausa();

    }while(opt !== '0');
    
    //pausa();
}

main();