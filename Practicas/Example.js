let conexion; 
let datos; 
let resultConsulta; 

datos =[
{ producto: "Teclado", cantidad: 4 },
{ producto: "Teclado", cantidad: 2 },
{ producto: "Monitor", cantidad: 6 },
{ producto: "Monitor", cantidad: 1 },
{ producto: "Impresora", cantidad: 3 },
{ producto: "Impresora", cantidad: 2 },
{ producto: "Tablet", cantidad: 5 },
{ producto: "Tablet", cantidad: 1 },
{ producto: "Auriculares", cantidad: 7 },
{ producto: "Auriculares", cantidad: 2 },
{ producto: "Webcam", cantidad: 4 },
{ producto: "Webcam", cantidad: 3 },
{ producto: "Disco Duro", cantidad: 8 },
{ producto: "Disco Duro", cantidad: 2 },
{ producto: "Silla Gamer", cantidad: 1 },
{ producto: "Silla Gamer", cantidad: 2 }
]

conexion =db.getSiblingDB('instituto')
/*
// insercion 

conexion.product_computer.insertMany(datos)

// consulta 
resultConsulta = conexion.product_computer.find()

while(resultConsulta.hasNext()){
    console.log(resultConsulta.next())
}
*/


let mapFunction = function(){
    emit(this.producto, this.cantidad);
}

let  reduceFunction = function(key, values){
    return Array.sum(values)
}


// ejecucion de map reduce

conexion.product_computer.mapReduce(
      mapFunction, reduceFunction, 
      {out: "Resultado_productos_cantidad"}

)