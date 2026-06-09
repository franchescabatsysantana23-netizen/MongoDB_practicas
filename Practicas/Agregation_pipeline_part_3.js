let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')
tuberia = [
           {$sample: {size:5}}, // retorna una muestra aleatoria de cinco documentos.. 
           // concat concatena los campos nombre y apellido. 
           {$project: {_id:0, nombre_completo:{$concat: ['$nombre',' ','$apellido']}, correo:1, promedio:1, edad:1, telefono:1  }},
           {$out: 'Alumnos_randoms'}  // crea la collection Alumnos_randoms apartir del resultado de la agregacion. 
        
        ]
resultado= conexion.estudiante.aggregate(tuberia)
console.log(resultado)
