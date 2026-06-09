let conexion;
let resultT; 
let tuberia;
tuberia=[{$project: {_id:0, nombre:1, marca:1, categoria:1,precio:1, stock:1,envioGratis:1,descripcion:1,
         condicion:{$switch:
            {branches: [{case:{$eq:[{$type:"$precio"},"null"]} , then: "es nulo "},
                       {case:{$eq: ['$precio',0]},then:"Cero"},
                       {case:{$and: [{$gt:['$precio',1]},{$lt:['$precio',1001]}]},then: "En el rango de 1 a 1000"},
                       {case: {$and:[{$gt:['$precio',1001]},{$lt:['$precio',3000]}]},then:"En el rango 1001 a 3000"}
                       ],
                       default:"valor desconocido"
}
         }
}}]
conexion=db.getSiblingDB('instituto')

resultT=conexion.productos.aggregate(tuberia)
console.log(resultT)