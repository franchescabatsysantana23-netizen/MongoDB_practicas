let conexion;
let resultado; 
let tuberia; 

conexion =db.getSiblingDB('instituto')
tuberia =[
    {$match: {activo: true}},
    {$project : {sexo:1, carrera:1, promedio:1, telefono:1, _id:0 , nombre_completo : {$concat : ["$nombre"," " ,"$apellido"]}}},
    {$sort: {nombre_completo: 1}},
    {$limit:5},
    {$skip:2}

]

resultado = conexion.estudiante.aggregate(tuberia)
console.log(resultado)
