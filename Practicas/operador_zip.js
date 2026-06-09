let conect;
let result;
tuberia=[{$project: {
    estudiante:1,
    zip_calificaciones:{
        $zip:{
            inputs:['$cursos_inscritos','$calificaciones'], // une los campos cursos incritos y calificaciones del documento en 
            // un arreglo. 
            useLongestLength: false //ignora la cantidad de elementos que excedan el valor del arreglo más corto.
            }
    }
}}]
conect =db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)