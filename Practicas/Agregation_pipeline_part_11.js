/*
Evalua varias expresiones y retorna true si y solo si todas
las expresiones retornan true, de lo contrario retorna false. 

*/

let conexion;
let variableT;
let resultT;

variableT = [
    
    {$match: {edad: {$gte: 25}}},
    {$project: 
    {nombre:1,promedio:1,sexo:1,  estado1 : {$and: [
                                                  {$gte:['$edad',25]},{$eq: ['$nombre','Ricardo']}

    ]}}
}]

conexion = db.getSiblingDB('instituto')

resultT = conexion.estudiante.aggregate(variableT)
console.log(resultT)