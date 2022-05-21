import * as rls from 'readline-sync';

//Completa un arreglo con números al azar menores que 100
function cargarArreglo(arreglo:number[], dim:number) {
    let indice:number;
    for (  indice = 0 ; indice < dim; indice++) {
            arreglo[indice] = Math.floor(Math.random()*100);
    }
}
//Suma dos arreglos y el resultado lo pone en otro arreglo
function sumarArreglos(arreglo1:number[], arreglo2:number[], arreglo3:number[], dim:number) {
    let indice:number;
    for (  indice = 0 ; indice < dim; indice++) {
            arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
    }
}
//Muestra un arreglo
function mostrarArreglo(arreglo:number[], dimension:number) {
    let linea : string = "";
    let indice : number;
    for (indice = 0 ; indice < dimension; indice++) {
            linea += `  ${arreglo[indice]}`;
    }
    console.log (linea);
}
// Calcula la suma de tres arreglos
let dim : number = rls.questionInt(`Ingrese la dimensión del arreglo: `);
let arreglo1 : number[] = new Array (dim);
let arreglo2 : number[] = new Array (dim);
let arreglo3 : number[] = new Array (dim);
cargarArreglo(arreglo1, dim); 
cargarArreglo(arreglo2, dim); 
sumarArreglos(arreglo1, arreglo2, arreglo3, dim); 
mostrarArreglo(arreglo1, dim); 
mostrarArreglo(arreglo2, dim); 
console.log ("La suma de los arreglos es:")
mostrarArreglo(arreglo3, dim);
