let conexion; 
let tuberias; 
let resultT;

/*

*/
tuberias =[{$match : {show_id: {$eq:'s2'}}},
           {$project: {_id:0, type:1, title:1, show_id:1, country:1, 
            // busca la posicion de la ocurrencia del substring &  dentro del campo title , indicando un indice de busqueda de cero a 13. 
            ocurrenciaString : {$indexOfBytes: ['$title','&',0,13]} 
          }}] 


conexion = db.getSiblingDB('instituto')
resultT=conexion.Movies.aggregate(tuberias)
console.log(resultT)