import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt(`Ingrese la dimensión del arreglo: `);
let arreglo : number[] = new Array (dimensionArreglo);
let indice : number; 
let resultado : number = 0;
for (indice = 0; indice < dimensionArreglo; indice++) {
    arreglo[indice] = rls.questionInt(`Indique el nro que va en la posición ${indice}: `);
    resultado += arreglo[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`); 