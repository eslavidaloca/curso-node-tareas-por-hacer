import { guardarDB, leerDB } from './helpers/interaccionDB.js';
import {
    inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist
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
            case '1': //Crear tarea
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;
            case '2': //Listar todas las tareas
                tareas.listadoCompleto();
            break;
            case '3': //Listar solo tareas completadas
                tareas.listarPendientesCompletadas(true);
            break;
            case '4': //Listar solo tareas pendientes
                tareas.listarPendientesCompletadas(false);
            break;
            case '5': //Completar tareas
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6': //Borrar tarea
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const conf = await confirmar('¿Estas seguro de que deseas borrarlo?');
                    if(conf){
                        tareas.borrarTarea(id);
                        console.log(`Tarea borrada con exito!`);   
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);

        if(opt !== '0') await pausa();

    }while(opt !== '0');
}

main();