let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')


tuberia =[{ $project:
                 // proyecta fecha de inscripcion, nombre, apellido, nombref y oculta el campo id. 
                 { _id:0, fecha_inscripcion:1, nombre:1, apellido: 1,
                // nombreF: {$not : {$regexMatch: {input: '$nombre', regex: /fernanda/i}}} retorna verdadero todos aquellos nombres no coincidente fernanda.
                   // retorna true en cada coincidencia de documento que contenga el nombre fernanda.
                   nombreF: {$regexMatch: {input:'$nombre', regex: /fernanda/i}}
                 }
}]


resultado=conexion.estudiante.aggregate(tuberia)
console.log(resultado)

