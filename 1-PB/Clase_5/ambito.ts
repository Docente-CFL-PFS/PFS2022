let mensaje:string = "Hola Mundo!!";
// console.log(mensaje);
ambitoVariables();
console.log(mensaje);

function ambitoVariables() {
    let mensaje:string;
    mensaje = "Hola Argentina!!";
    console.log(mensaje);
    mensaje = leeVariable(mensaje);
    console.log(mensaje);
}
function leeVariable(mensaje: string): string {   
    let respuesta : string;
    console.log(mensaje);
    mensaje = "Hola CFL!!";
    respuesta = mensaje+' Bienvenidos';
    return respuesta;
}