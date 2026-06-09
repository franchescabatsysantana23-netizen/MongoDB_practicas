/*Obtener el volumen promedio */

let conexion; 
let result;
let tuberia; 
tuberia =[{$group : {_id: null, // agrupa todos los documentos en un solo grupo.
    promedioVolumen: {$avg: '$volumen'}  // calcula el promedio del campo volumen. 
}}]

conexion= db.getSiblingDB('instituto')
result = conexion.Dia_Cotizaciones.aggregate(tuberia).toArray()
console.log(result)