let conexion;
let result;
/*Importar el JSON de usuarios dado, mediante
las Mongo Tools, y obtener todos los datos del
usuario con ID 3. */

tuberia =[{$match: {id: 3}}]
conexion = db.getSiblingDB('instituto')

result = conexion.usuarios.aggregate(tuberia).toArray()
console.log(result)

