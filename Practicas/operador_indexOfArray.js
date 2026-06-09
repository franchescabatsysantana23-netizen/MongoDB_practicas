/*
Este operador realiza una busqueda de un elemento que se pasa en una 
expresion en un arreglo. 

Retorna la posicion en el arreglo de la primera coincidencia que exista. 
Si ningun elemento coincide, devuelve -1.
*/

let conect;
let result; 

tuberia=[
    {$match: {estudiante:'Juan Pérez'}},
    {$project:{
    _id:1,
    indice: {$indexOfArray:['$calificaciones',85]} //obtiene el indice donde se encuentra el elemento filtrado. 
}}]
conect=db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)