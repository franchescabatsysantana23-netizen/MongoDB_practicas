let conexion;
let resultT;
let tuberia;

tuberia = [{$project: {_id:0, nombre:1, marca:1, categoria:1, precio:1,stock:1, descripcion: 1,
    condicion:{
        $cond:[
          {$eq:[{$type:"$precio"},"null"]},'si','no'  //evalua si el campo precio es null
        
        ]}
}}]
conexion= db.getSiblingDB('instituto')
console.log(conexion)
resultT=conexion.productos.aggregate(tuberia)
console.log(resultT)

