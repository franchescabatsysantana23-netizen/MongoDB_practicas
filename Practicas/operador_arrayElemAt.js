let conexion;
let resultT;
let tuberia; 

tuberia =[ {$match: {_id: ObjectId('6994862a11967739ec628ca0')}},
            {$project: {
                _id: 1, 
                estudiante:1, 
                edad: 1,
                TercerCursoInscripto: {$arrayElemAt: ['$cursos_inscritos',2]},
                TeceraNotaEstudiante: {$arrayElemAt: ['$calificaciones',2]},
                interesEstudiante: {$arrayElemAt: ['$intereses',2]},
                pagosRealizados: {$arrayElemAt:['$pagos_realizados',1]}
}}]

conexion= db.getSiblingDB('instituto')

resultT=conexion.cursos_online.aggregate(tuberia)
console.log(resultT)