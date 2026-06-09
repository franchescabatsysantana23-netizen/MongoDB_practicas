let conexion;
let resultT;
let tuberia=[{$group: {
    _id:'',
    desviacionMuestral: {$stdDevSamp:'$Age'},
    desviacionEstandar: {$stdDevPop: '$Age'},
    totalPasajeros: {$count: {}},
    ultimo: {$last: '$PassengerId'},
    primero: {$first : '$PassengerId'}
}}]

conexion=db.getSiblingDB('instituto')
resultT=conexion.Titanic.aggregate(tuberia)
console.log(resultT)