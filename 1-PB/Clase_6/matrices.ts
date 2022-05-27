import * as rls from "readline-sync";

let filas : number = rls.questionInt("Indique la cantidad de filas: ");
let columnas : number = rls.questionInt("Indique la cantidad de columnas: ");

let matriz : string[][] = crearMatriz(filas, columnas);
inicializarMatriz(matriz);
mostrarMatriz(matriz);

function crearMatriz(filas: number, columnas: number) : string[][] {
    let matriz : string[][] = new Array(filas);
    let fila  : string[];
    for (let index = 0; index < matriz.length; index++) {
        fila = new Array(columnas);
        matriz[index] = fila;        
    }
    return matriz;
}
function inicializarMatriz(matriz : string[][]) {
    for (let indexF = 0; indexF < matriz.length; indexF++) {
        for (let indexC = 0; indexC < matriz[indexF].length; indexC++) {
            matriz[indexF][indexC] = Aleatorio(100).toString();
        }
    }
}
function mostrarMatriz(matriz : string[][]) {
    let linea : string = "";
    for (let indexF = 0; indexF < matriz.length; indexF++) {
        linea += (indexF==0)? "":'\n';
        for (let indexC = 0; indexC < matriz[indexF].length; indexC++) {
            linea += ((matriz[indexF][indexC].length < 2)? "  ":" ") + matriz[indexF][indexC]; 
        }
    }
    console.log(linea);
}
function Aleatorio(rango : number) : number {
    return Math.floor(Math.random() * rango);
}