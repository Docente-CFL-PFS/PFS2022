import * as rls from "readline-sync";

let palabra : string = rls.question("Indique la palabra a codificar: ");

console.log(`La palabra ingresada: ${palabra} se convierte en: ${convertirEnClave(palabra)}`);

function convertirEnClave(palabra : string) : string {
    let vocales : string = "aeiou";
    let signos : string = ".,;:!"
    let matematicos : string = "0123456789+-*/";
    let clave : string = "";
    for (let index = 0; index < palabra.length; index++) {
        if (matematicos.indexOf(palabra[index]) >= 0) {
            clave += palabra[index];
        } else {
            if (vocales.indexOf(palabra[index]) >= 0) {
                clave += signos[vocales.indexOf(palabra[index])];
            } else {
                if (palabra[index] == palabra[index].toUpperCase())
                    clave += palabra[index].toLowerCase();
                else
                    clave += palabra[index].toUpperCase();
            }
        }   
    }
    return clave;
}
