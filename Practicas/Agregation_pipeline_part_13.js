/*
Evalúa varias expresiones y retorna true si al
menos una de las expresiones retornan true,
de lo contrario retorna false.

*/

let conexion;
let variableT;
let resultT;

variableT = [
    
    {$match: {edad: {$gte: 20}}},
    {$project: 
    {nombre:1,promedio:1,sexo:1,  estado1 : {$not: {$or: [
                                                  {$gte:['$edad',20]},{$eq: ['$nombre','Ricardo']}] 
                                                
                                                   }}
}}]

conexion = db.getSiblingDB('instituto')

resultT = conexion.estudiante.aggregate(variableT)
console.log(resultT)