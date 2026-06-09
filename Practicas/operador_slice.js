let conect;
let result;
tuberia=[{$project: {
    estudiante:1,
    primeraCurso_inscrito: {$slice: ['$cursos_inscritos',1]} // extrae el primer elemento del array cursos_inscritos. 
  }
 }
]
conect =db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)