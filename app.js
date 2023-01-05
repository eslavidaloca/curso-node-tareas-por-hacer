import colors from 'colors';

import { guardarDB, leerDB } from './helpers/interaccionDB.js';
import {
    inquirerMenu, pausa, leerInput
} from './helpers/inquirer.js';
import {Tareas} from './models/tareas.js';

console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
    do{
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;
            case '2':
                tareas.listadoCompleto();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
        }

        guardarDB(tareas.listadoArr);

        if(opt !== '0') await pausa();

    }while(opt !== '0');
}

main();