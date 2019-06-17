const argv = require('./config/yards').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.listar);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

//let argv2 = process.argv;
//console.log(argv.base)