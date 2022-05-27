

import * as rls from "readline-sync";
​ 
let n: number = rls.questionInt("cantidad de elementos: ")
let arregloUsuario:number [ ] = new Array (n);
let arregloInvertido:number [ ] = new Array (n);
let i=0
for(i; i<n; i++) {   
    arregloUsuario [i] = rls.questionInt("Ingrese un valor para la posicion "+i+" :");
    arregloInvertido[n-1-i]=arregloUsuario[i]; 
}
console.log("La lista de elementos es: ",arregloUsuario, ",La invertida es: ", arregloInvertido);

