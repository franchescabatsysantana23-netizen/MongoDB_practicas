let conexion;
let resultT;

tuberia = [{$project: 
     {nombre:1,
      anio:{$year: new Date()},
      mes:{$month: new Date()},
      semana: {$week: new Date()},
      hora: {$hour: new Date()},
      minuto:{$minute: new Date()},
      segundo: {$second: new Date()},
      milisegundos: {$millisecond: new Date()},
      diaAnio: {$dayOfYear: new Date()},
      diaMes: {$dayOfMonth: new Date()},
      diaSemana: {$dayOfWeek: new Date()}
    }  
    }]
conexion=db.getSiblingDB('instituto')
console.log(conexion)

resultT=conexion.productos.aggregate(tuberia)
console.log(resultT)