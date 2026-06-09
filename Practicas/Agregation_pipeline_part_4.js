let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')
tuberia = [  // agrega un nuevo campo llamado nombre completo concatenando los campos nombre y apellido. 
           {$addFields: {nombre_completo: {$concat:["$nombre"," ","$apellido"]}}}, 
           {$out: 'estudiante1'} // almacena esto resultado en la collection estudiante. 
           
        ]
conexion.estudiante.aggregate(tuberia)

