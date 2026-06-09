let conect;
let result;
let tuberia;

tuberia=[{$project:{
    estudiante:1,

    // El operador is arrays evalua si un campo en el documento es un arreglo si es asi 
    // retorna un valor booleano, true para campos identificados como arrays o false en el caso contrario.
    validar_array1:{$isArray:"$cursos_inscritos"},
    validar_array2:{$isArray: "$calificaciones"},
    validar_array3:{$isArray:"$pagos_realizados"},
    validar_array4: {$isArray:"$estudiante"}

}}]
conect= db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)

