let conect;
let result;
let tuberia;

tuberia=[{$project:{
      estudiante:1,
      edad:1, 
      calificaciones:1,
      calificaciones1: {
        // con el operador map, del array calificaciones se determina el tipo de los valors contenido en el mismo. 
        $map:{input:'$calificaciones',as:"calificacion",in:{$type:"$$calificacion"}}
      }

}}]
conect=db.getSiblingDB('instituto')
result=conect.cursos_online.aggregate(tuberia)
console.log(result)
