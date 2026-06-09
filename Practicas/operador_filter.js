let conect;
let tuberia;
let result;


tuberia =[{$project:{
    estudiante:1,
    notasmayores85: {
        $filter:{

             // del campo calificaciones, 
             // se extrae las notas, y atraves de operador
             // cond se filtran las notas contenidas dentro del array entre 85 y 90. 
            input:"$calificaciones", as:"calificacion",
            cond:{$and: [
                {$gt:["$$calificacion",85]},
                {$lt:["$$calificacion",90]}
            ]
            }}
        } }
}]
conect =db.getSiblingDB('instituto')
result=conect.cursos_online.aggregate(tuberia);
console.log(result)