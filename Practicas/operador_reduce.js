let conect;
let result;
tuberia=[
    {
    $project: {
    estudiante:1,
      promedio: {
         $divide: [
            {
                $reduce:{
                     input:'$calificaciones',
                     initialValue: 0,
                     in: { $add: ["$$value", "$$this"] }
                }
            },
            {$size:'$calificaciones'}
         ]
      }
   } 
 }
]
conect =db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)