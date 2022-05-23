import*as rls from 'readline-sync';

let sal:number=rls.questionInt("Ingrese su salario actual: $")
switch(true){
    case (sal<=15000):
        console.log("Su salario aumenta un 20% y su sueldo será un total de: $"+(sal*1.2));
        break;
    case (sal<=20000):
        console.log("Su salario aumenta un 10% y su sueldo será un total de: $"+(sal*1.1));
        break;
    case (sal<=25000):
        console.log("Su salario aumenta un 5% y su sueldo será un total de: $"+(sal*1.05));
        break;
    default: 
        console.log("Su salario no tiene aumento y permanece siendo $"+sal);
}

