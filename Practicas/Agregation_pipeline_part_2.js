let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')
tuberia = [
           {$match: {promedio:{$gte: 8.5}}}, // filtra en la collection estudiante el promedio mayor a 8.5. 
           {$count:"total"}
        ]
resultado= conexion.estudiante.aggregate(tuberia)
console.log(resultado)
