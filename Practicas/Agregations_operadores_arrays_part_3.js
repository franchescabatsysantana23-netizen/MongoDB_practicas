let conexion;
let resultT;
let tuberia; 

tuberia =[
            {$project: {
              nombre:1, 
              marca:1,
              categoria:1, 
              precio:1, 
              stock:1,
              envioGratis:1,
              descripcion:1,
              precios1: {$filter: {input:"$precio", as:"precios", cond:{$lte:["$precio",2600]}}}
}}]

conexion= db.getSiblingDB('instituto')

resultT=conexion.cursos_online.aggregate(tuberia)
console.log(resultT)