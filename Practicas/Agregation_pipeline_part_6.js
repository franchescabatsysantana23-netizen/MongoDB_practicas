let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')

tuberia = [ {$project: {_id:0, nombre:1, nombre1: {$eq: ['$nombre','Lucía']} }},]

resultado=conexion.estudiante.aggregate(tuberia)
console.log(resultado)

