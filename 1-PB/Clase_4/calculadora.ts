import * as rls from 'readline-sync';

function dibujar(numero: number, oper: number): string {
    let simbolo : string = (oper==1)?'+':'-';
    let linea : string = simbolo;
    for (i = 0; i <= numero; i++) {
        linea = linea + simbolo;
    };
    return linea;
}
function calcularResultado(ope1: number, ope2: number, oper: number): number {
    return ((oper==1)?ope1+ope2:ope1-ope2);
}

let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese un número: "); ;
let numero2 : number = rls.questionInt("Ingrese un número: "); ;
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
console.log(dibujar(20,opcionMenu));
console.log("el resultado es: ", calcularResultado(numero1,numero2,opcionMenu));
console.log(dibujar(20,opcionMenu));
 