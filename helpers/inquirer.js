import inquirer from 'inquirer';
import colors from 'colors';
import { validate } from 'uuid';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear lista`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('=============================='.brightCyan);
    console.log('   Administrador de tareas'.brightCyan);
    console.log('==============================\n'.brightCyan);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}


const pausa = async() => {
    
    const pausaOpts = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.cyan} para continuar\n`,
        }
    ]
    const {enter} = await inquirer.prompt(pausaOpts);

    return enter;
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);

    return desc;
}

export {
    inquirerMenu,
    pausa,
    leerInput
}