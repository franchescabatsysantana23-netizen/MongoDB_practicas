let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')

//tuberia = [ {$project: {_id:0, nombre:1, apellido:1, activo:{$ne: ['$activo','true']} }},]
//tuberia =[{$project: {_id:0, nombre:1, apellido:1, promedio:1,  promedio_ma_igual: {$gt: ['$promedio',8]}}}]
tuberia =[{$project: {_id:0, nombre:1, apellido:1, promedio:1,  promedio_ma_igual: {$lte: ['$promedio',8]}}}]


resultado=conexion.estudiante.aggregate(tuberia)
console.log(resultado)

