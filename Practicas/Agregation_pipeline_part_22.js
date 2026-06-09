let conexion; 
let tuberias; 
let resultT;

/*

*/
tuberias =[
         { $lookup: {
         from: "users_description",
         localField: "id",
         foreignField: "userId",
         as: "descripcion_usuarios"
          }
      },// Eliminacion del array del campo descripcion_usuarios. 
      {$unwind: "$descripcion_usuarios"},
       {$project: {_id:0, name:1, email:1,address:1, phone:1, titulo_del_post: "$descripcion_usuarios.title", comentario_post: "$descripcion_usuarios.body"}},
       {$out: "info_users_details1"}
        ] 


conexion = db.getSiblingDB('instituto2')
console.log(conexion)
resultT=conexion.users_details.aggregate(tuberias)
console.log(resultT)