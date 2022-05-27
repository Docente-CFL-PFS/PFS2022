import * as rls from "readline-sync";

let texto : string = rls.question("Ingrese un texto: ");

console.log(`El texto: ${texto} convertido a CamelCase queda: ${pasarCamelCase(texto)}`);

function pasarCamelCase(texto : string) : string {
    let aMayusc:boolean = false;
    let camelCase:string="";
    for (let i = 0; i < texto.trim().length; i++) {
        if (texto[i]==' ') {
            aMayusc = true
        } else {
            if (aMayusc) {
                camelCase += texto[i].toUpperCase();
                aMayusc=false;
            } else {
                camelCase += texto[i].toLowerCase();
            }            
        }
    }
    return camelCase;
}