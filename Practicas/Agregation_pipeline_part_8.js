let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')


tuberia =[{ $project:
                 { _id:0, fecha_inscripcion:1, nombre:1, apellido: 1,
                  nombreF:{$eq: ['$nombre','Fernanda']}, apellidoC: {$ne: ['$apellido','Castillo']}
                 }
}]


resultado=conexion.estudiante.aggregate(tuberia)
console.log(resultado)

