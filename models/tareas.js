import colors from 'colors';

import {Tarea} from './tarea.js';

export class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        //Formato de la funcion
        //1. : en verde
        //Completada : verde
        //Pendiente : Rojo

        //1. Alma :: Completada | Pendiente
        //2. Poder :: Completada | Pendiente
        //3. Mente :: Completada | Pendiente

        this.listadoArr.forEach((tarea, i) => {
            if(tarea.completadoEn === null){
                console.log(`${((i+1) + '.').green} ${tarea.desc} :: ${colors.brightRed('Pendiente')}`);
            }else{
                console.log(`${((i+1) + '.').green} ${tarea.desc} :: ${colors.brightGreen('Completada')}`);
            }
        });
    }
    
    listarPendientesCompletadas(completadas = true){
        let i = 1;
        this.listadoArr.forEach(tarea => {
            if(tarea.completadoEn === null){
                if(!completadas){
                    console.log(`${(i + '.').green} ${tarea.desc} :: ${colors.brightRed('Pendiente')}`);
                    i += 1;
                }
            }else{
                if(completadas){
                    console.log(`${(i + '.').green} ${tarea.desc} :: ${colors.brightGreen('Completada el ' + tarea.completadoEn)}`);
                    i += 1;
                }
            }
        });
        
    }
}