let conexion; 
let tuberias; 
let resultT;

/*

*/
tuberias =[
           {$project: {_id:0, type:1, title:1, show_id:1, country:1, 
            countryMayusculas:{$toUpper: '$country'}
          }},
        {$out: 'test_movies'}] 


conexion = db.getSiblingDB('instituto')
resultT=conexion.Movies.aggregate(tuberias)
console.log(resultT)