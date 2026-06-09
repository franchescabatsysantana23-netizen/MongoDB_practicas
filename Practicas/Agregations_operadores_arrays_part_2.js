let conexion;
let resultT;
let tuberia; 

tuberia =[ {$match: {_id: ObjectId('6994862a11967739ec628cb3')}},
            {$project: {
                cursos_inscriptos:1, 
                calificaciones:1,
                arregloConcatenado :{
                          $concatArrays: ['$cursos_inscriptos','$calificaciones']
                }
}}]

conexion= db.getSiblingDB('instituto')

resultT=conexion.cursos_online.aggregate(tuberia)
console.log(resultT)