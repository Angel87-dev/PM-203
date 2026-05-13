console.log("Hola Mundo JS servidor")

/*medir el tiempo del proceso*/
console.time("miProceso")

for(let i = 0; i < 1000000; i++){ }

console.timeEnd("miProceso")

/*objetos tipo tabla*/
let usuarios=[
    {nombre:"Jose", edad: 20},
    {nombre:"Angel", edad: 20},
];

console.table(usuarios)