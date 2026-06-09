let conexion; 
let result;

conexion =db.getSiblingDB('instituto')

let mapFunction = function (){
    emit (this.Sex, 1)// agrupar por sexo
}
let reduceFunction=function(key, values){
 return Array.sum(values); //suma los valores por sexo

}


result=conexion.Titanic.mapReduce(
    mapFunction, reduceFunction, 
    {out:{inline:1}}
)
console.log(result)