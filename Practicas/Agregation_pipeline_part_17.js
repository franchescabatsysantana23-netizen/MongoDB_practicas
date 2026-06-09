let conexion; 
let tuberias; 
let resultT;
tuberias =[{$match : {release_year: {$gte:2021}}},
           {$project: {_id:0, type:1, title:1, show_id:1, country:1, 
            campoConcadenado: {$concat: ['$title',' desde ','$date_added']}, // concatena el campo title con el campo date_added. 
            CampoSeparado: {$split: ['$title', 'a']}}}] // separa el texto donde encuentra la vocal a y almacena en un array. 


conexion = db.getSiblingDB('instituto')
resultT=conexion.Movies.aggregate(tuberias)
console.log(resultT)