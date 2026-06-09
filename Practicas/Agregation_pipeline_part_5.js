let conexion;
let tuberia;
let resultado;
conexion=db.getSiblingDB('instituto')
tuberia = [ {$sortByCount:"$sexo"},// sortByCount, es un group mas count en este caso cuenta los estudiante agrupado por sexo.    
        ]
resultado=conexion.estudiante.aggregate(tuberia)
console.log(resultado)

