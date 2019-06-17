const fs = require('fs');
let data = '';


let listarTabla = (base, limite = 12) => {
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 12) => {



    return new Promise((resolve, reject) => {


        if (!Number(base)) {

            reject('no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)

            else
                resolve(`tabla-${base}.txt`);
        })

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}