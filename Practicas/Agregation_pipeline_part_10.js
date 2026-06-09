/*
Se utiliza
para determinar si un valor es menor, igual o mayor a
otro valor.

-1 si el primer valor es menor al segundo.
0  si son iguales. 
1 si el primer valor es mayor al segundo. 

*/

let conexion;
let variableT;
let resultT;

variableT = [{$project: 
    {nombre:1,promedio:1,sexo:1,  promedioD: {$cmp: ['$promedio', 8.4]}}
}]

conexion = db.getSiblingDB('instituto')

resultT = conexion.estudiante.aggregate(variableT)
console.log(resultT)