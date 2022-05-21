import * as rls from 'readline-sync';

let arregloNombres : string[]  = new Array (2);
let arregloNumeros : number[]  = new Array (3);
let indice : number;
for (indice = 0; indice < 2; indice++) { 
    arregloNombres[indice] = rls.question(`Ingrese el nombre de la posición ${indice}: `);
}
for (indice = 0; indice < 3; indice++) { 
    arregloNumeros[indice] = rls.questionInt(`Ingrese el número de la posición ${indice}: `);
}
for (indice = 0; indice < 2; indice++) {
console.log(`El nombre en la posición ${indice} es: ${arregloNombres[indice]}`); 
}
for (indice = 0; indice < 3; indice++) { 
console.log(`El número en la posición ${indice} es: ${arregloNumeros[indice]}`);
}
