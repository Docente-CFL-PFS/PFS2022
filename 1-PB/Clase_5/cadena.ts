import * as rls from 'readline-sync';

let texto : string;
texto = rls.question(' Ingrese su apellido: ');
texto += ' ' + rls.question(' Ingrese su nombre: ');
texto = texto + ' ' + rls.question(' Ingrese su nombre: ');
console.log(' Bienvenido '+texto+'!!!');
// texto = '';
// console.log(texto);
// texto = texto + 'algo ';
// console.log(texto);
// texto = 'que ' + texto;
// console.log(texto);
// texto = texto + 'quiero mostrar';
// console.log(texto);
let i: number;
i=0;
i++; // i=i+1;
i+=2; // i=i+2;
i*=21; // i=i*21;
