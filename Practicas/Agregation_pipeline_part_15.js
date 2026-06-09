let conexion; 
let tuberias; 
let resultT;
tuberias =[{$match : {Country: 'Canada'}},
    {$project: {_id:0, Country:1, Product:1, Date:1, Amount: 1,
     'Boxes Shipped': 1, 
      campoCeil: {$ceil : '$campoDivide'}, // retorna el valor mayor entero mas cercano
      campofloor : {$floor: '$campoDivide'}, // retorna el numero entero menor mas cercano.
      campoTrunc : {$trunc : '$campoDivide'} // retorna la parte entera de un numero dado. 
     }}]


conexion = db.getSiblingDB('instituto')
resultT=conexion.Chocolate_sale12.aggregate(tuberias)
console.log(resultT)