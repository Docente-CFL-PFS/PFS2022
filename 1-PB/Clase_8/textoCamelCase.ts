import * as rls from 'readline-sync';
// Recibe un texto y lo convierte en un nombre de variable estilo CamelCase
function convertirACamelCase(texto : string) : string {
    let textoLocal : string = texto.toLowerCase().trim();
    let vbleCamelCase : string = "";
    let indice : number = 0;
    while (indice < textoLocal.length) {
        if (textoLocal[indice]== " ") {
            vbleCamelCase += textoLocal[indice+1].toUpperCase();
            indice+=2;
        } else {
            vbleCamelCase += textoLocal[indice];
            indice++;
        }
    }
    return vbleCamelCase;
}
    

let texto : string = rls.question("Ingrese el texto a convertir a CamelCase : ");
while (texto != "") {
    console.log(convertirACamelCase(texto));
texto = rls.question("Ingrese el texto a convertir a CamelCase : ");
}
