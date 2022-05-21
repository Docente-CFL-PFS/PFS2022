import * as rls from 'readline-sync';
// Aleatorio
function Aleatorio(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Función que genera un arreglo bi-dimensional
function Matriz(filas : number,butacas : number) : number[][] {
    let matriz : number[][] = new Array(filas);
    let indice : number;
    for (indice=0; indice < filas; indice++) {
        matriz[indice] = new Array(butacas);
    }
    return matriz;
}
// Se asignan aleatoriamente ocupaciones a las butacas de la matriz
function completarButacas(asientos:number[][], filas:number, columnas:number) {
    let f:number, c:number;
    for (f=0; f < filas; f++) {
        for (c=0; c < columnas; c++) {
            asientos[f][c]= Aleatorio(0,1);
        }
    }
}
// Se pide que digan una posición de butaca para comprar
function elegirButaca(asientos:number[][]) {
    let fila : number = rls.questionInt( "Indique la fila que desea: ");
    let butaca : number = rls.questionInt( "Indique la butaca que desea: ");
    console.log(`Eligió: Butaca ${butaca} de fila ${fila}`);
    asientos[fila-1][butaca-1]=1; 
}
// Muestra las butacas libres y ocupadas de la matriz
function mostrarButacas(asientos:number[][], filas:number, columnas:number) {
    let cadena: string = "";
    let f:number, c:number;
    for (c=0; c < columnas; c++) 
        cadena += `B${c+1} `;
    console.log (cadena);
    for (f=0; f < filas; f++) {
        cadena = "";
        for (c=0; c < columnas; c++) 
            cadena += `${asientos[f][c]}  `;
        cadena += `Fila ${(f+1)} `;
        console.log (cadena);
    }
    console.log ("----------------");
}

// Se asigna una butaca de un colectivo a un pasajero
let filas : number = 5; 
let butacas : number = 3; 
let asientos : number[][] = Matriz(filas,butacas);
completarButacas(asientos, filas, butacas); 
mostrarButacas(asientos, filas, butacas);
elegirButaca(asientos); 
mostrarButacas(asientos, filas, butacas); 
