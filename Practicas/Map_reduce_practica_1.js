let conexion; 
let result;

conexion =db.getSiblingDB('instituto')

let mapFunction = function (){
    emit (this.Sex, this.Survived)
}
let reduceFunction=function(key, values){
   // return Array.avg(values) --retorna el promedio de los sobrevivientes por sexo
   return Array.sum(values) // total de sobrevivientes por sexo. 
}

result=conexion.Titanic.mapReduce(
    mapFunction, reduceFunction, 
    {out:{inline:1}}
)
console.log(result)