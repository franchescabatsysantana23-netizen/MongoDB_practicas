let conexion;
let resultT;
tuberia=[{$group: {_id:'precio',
    precioMinimo: {$min:'$precio'},
    precioMaximo: {$max:'$precio'},
    totalPrecio: {$sum: '$precio'},
    precioPromedio: {$avg: '$precio'},
    primerValor : {$first: '$precio'},
    ultimaValor : {$last: '$precio'},
    totalRegistros: {$count:{}}
}}, {$out: 'Estadisticas_productos'}]
conexion =db.getSiblingDB('instituto')

resultT=conexion.productos.aggregate(tuberia)
console.log(resultT)