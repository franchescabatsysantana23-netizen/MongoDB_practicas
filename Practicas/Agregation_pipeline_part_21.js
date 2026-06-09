let conexion; 
let tuberias; 
let resultT;

/*
Permiten convertir todos los caracteres de un string a minusculas(toLower) o 
mayusculas($toUpper). 
*/
tuberias =[ {$match: {show_id: {$eq:'s13'}}},
            {$project: {_id:0, type:1, title:1, show_id:1, country:1, countryMayusculas:1,
            countryMinusculas:{$toLower: '$countryMayusculas'}, // convierte el texto a minusculas 
            LongitudTexto: {$strLenCP: '$country'} // obtiene la longitud de texto del campo country. 
          
          }}
        ] 


conexion = db.getSiblingDB('instituto')
resultT=conexion.test_movies.aggregate(tuberias)
console.log(resultT)