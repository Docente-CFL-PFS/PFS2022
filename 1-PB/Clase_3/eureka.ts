//Algoritmo Eureka 
import * as rls from 'readline-sync';
const clave : string = "eureka";
let contador : number = 0;
let claveIngresada : string = "";
while (contador < 3 && claveIngresada != clave) {
    claveIngresada = rls.question("Introduzca la clave: ");
    contador ++;
}
// for (; (contador < 3 && claveIngresada != clave); ) {
//     claveIngresada = rls.question("Introduzca la clave: ");
//     contador ++;
// }
if (claveIngresada != clave) {
    console.log("Ya no tiene más intentos");
} 
