let conect;
let tuberia;
let result;

tuberia=[{$project: {
    _id:0,
    estudiante:1,
    cursos_inscritos:1,
    // operador size suministra cantidad de elementos del arrays. 
    cantidad_elementos_cursos_inscritos:{$size: '$cursos_inscritos'},
    calificaciones:1,
    cantidad_elementos_calificaciones:{$size: '$calificaciones'}

}}]
conect=db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)