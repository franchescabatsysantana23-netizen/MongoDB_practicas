let conexion; 
let tuberias; 
let resultT;
tuberias =[{$match : {Country: 'Canada'}},
    {$project: {_id:0, Country:1, Product:1, Date:1, Amount: 1,
     'Boxes Shipped': 1, 
      campoSuma: {$add : ['$Amount',10]},
      CampoResta: {$subtract: ['$Amount',3]},
      CampoMultiplicacion: {$multiply: ['$Amount',5]},
      campoDivide: {$divide: ['$Amount',6]}, 
      campoModulo: {$mod: ['$Amount',5]}, 
      campoPotencia: {$pow: ['$Amount',2]},
      CampoRaiz: {$sqrt: '$Amount'}, 
      campoExp: {$exp: '$Amount'},
      campoLogaritmo: {$ln: '$Amount'},
      campoLogaritmoBase : {$log: ['$Amount',6]}
     }},
    {$out: 'Chocolate_sale12'}]


conexion = db.getSiblingDB('instituto')
resultT=conexion.chocolate_sales.aggregate(tuberias)
console.log(resultT)