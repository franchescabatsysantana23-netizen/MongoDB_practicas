let conexion; 
let tuberias; 
let resultT;

/*

*/
tuberias =[
           {$project: {_id:0, type:1, title:1, show_id:1, country:1, 
          // compara dos string que se pasan como parametro sin considerar las minúscula o mayúsculas. 
          // El operador retorna: 1  si el primer string es mayor al segundo, 0 si son iguales, -1 si es menor. 
           unitedCountry:{$strcasecmp: ['$country','UNITED Kingdom']}
          }}] 


conexion = db.getSiblingDB('instituto')
resultT=conexion.Movies.aggregate(tuberias)
console.log(resultT)