import * as rls from 'readline-sync';

function Aleatorio(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cargarArreglo(numeroArreglo:number[],dimensionArreglo:number) {
    let indice : number;
    for (  indice = 0 ; indice < dimensionArreglo; indice++) {
        numeroArreglo[indice] = Aleatorio(3,7);
    }
}
function mostrarArreglo(numeroArreglo:number[],dimensionArreglo:number) {
    let indice : number;
    let linea : string = "";
    for  ( indice = 0 ; indice < dimensionArreglo ; indice++) {
        linea += `  ${numeroArreglo[indice]}`;
    }
    console.log (linea);
}
function obtenerPromedio(numArreglo:number[],dimArreglo:number) : number {
    let prome:number = 0;
    let sumaTotal:number = 0;
    let indice:number;
    for (indice=0; indice < dimArreglo; indice++) {
        sumaTotal = sumaTotal + numArreglo[indice]; 
    }
    prome=sumaTotal/dimArreglo; 
    return Math.floor(prome);
}
        
//Calcula el promedio de las edades de los jugadores de fútbol
let promedio : number = 0;
let dimArreglo : number  = rls.questionInt(`Indique la cantidad de jugadores: `);
let numArreglo : number[]  = new Array (dimArreglo); 
cargarArreglo(numArreglo, dimArreglo);  
mostrarArreglo(numArreglo, dimArreglo); 
promedio = obtenerPromedio(numArreglo, dimArreglo);  
console.log (`El promedio las edades es de: ${promedio}`);

    