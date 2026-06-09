let conect;

tuberia=[{$project:{
      _id:0,
      estudiante:1,
      calificaciones:1, 
      calificacionesCon82: {$in: [82,'$calificaciones']} // retorna true si almenos si dentro del arreglo contiene una nota con el valor de 82. 


}}]
conect =db.getSiblingDB('instituto')
result=conect.cursos_online.aggregate(tuberia)
console.log(result)