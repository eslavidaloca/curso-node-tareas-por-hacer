import colors from 'colors';
import * as readline from 'readline';

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('=============================='.brightCyan);
        console.log('   Administrador de tareas'.brightCyan);
        console.log('==============================\n'.brightCyan);
    
        console.log(`${'1.'.brightMagenta} Crear tarea`);
        console.log(`${'2.'.brightMagenta} Listar tareas`);
        console.log(`${'3.'.brightMagenta} Listar tareas completadas`);
        console.log(`${'4.'.brightMagenta} Listar tareas pendientes`);
        console.log(`${'5.'.brightMagenta} Completar tarea(s)`);
        console.log(`${'6.'.brightMagenta} Borrar tarea`);
        console.log(`${'0.'.brightMagenta} Salir \n`);
    
        const io = readline.createInterface ({
            input: process.stdin,
            output: process.stdout
        });
    
        io.question('Seleccione una opcion: '.brightCyan, (opt) => {
            io.close();
            resolve(opt);
        })
    });
}

const pausa = () => {
    return new Promise(resolve => {
        const io = readline.createInterface ({
            input: process.stdin,
            output: process.stdout
        });
    
        io.question(`\nPresione ${'ENTER'.cyan} para continuar\n`, (opt) => {
            io.close();
            resolve(opt);
        })
    });
}

export {
    mostrarMenu,
    pausa
}