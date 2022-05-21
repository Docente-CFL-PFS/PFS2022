function Aleatorio(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Completa un arreglo con números enteros ingresados al azar
function completarBoliche(personas : number[], capacidad : number) {
    let indice : number;
    for (indice=0; indice < capacidad; indice++) {
        personas[indice]=Aleatorio(18,40) ;
    }
}
// Cuenta la cantidad de menores de 21 que hay en un arreglo
function contarMenores(personas : number[], capacidad : number) : number {
    let menores : number = 0;
    let indice : number;
    for  (indice=0; indice < capacidad; indice++) {
        if (personas[indice]  >  21) { 
            menores++; 
        }
    }
    return menores;
}
function mostrarPersonas(personas : number[], capacidad : number) {
    let indice : number;
    let linea : string = "";
    for  ( indice = 1 ; indice <= capacidad ; indice++) {
        linea += `  ${personas[indice-1]}`;
        if (indice % 30 == 0) {
            console.log (linea);
            linea = "";
        }
    }
    console.log (linea);
}
    
// Indica la cantidad de menores y de mayores de 21 años que hay en la disco
let capacidad = 270; 
let personas : number[] = new Array(capacidad );
let menores21 = 0; 
let mayores21 = 0;  
completarBoliche(personas,capacidad) 
menores21 = contarMenores(personas,capacidad) 
mostrarPersonas(personas, capacidad) 
console.log ("Los menores de 21 son: ", menores21);
console.log ("Los mayores de 21 son: ", capacidad - menores21 );
console.log ("En total hay ", capacidad, " personas"); 

