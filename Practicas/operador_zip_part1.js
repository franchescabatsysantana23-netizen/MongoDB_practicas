let conect;
let result;
tuberia=[{$project: {
    estudiante:1,
    zip_calificaciones:{
        $zip:{
            inputs:['$materias','$calificaciones'], // une los campos materias y calificaciones del documento en 
            // un arreglo. 
            useLongestLength: true, // no ignora la cantidad de elementos que excedan el valor del arreglo más corto.
            defaults: [null, null]           // rellena los valores cortos con null. 
            }
    }
}}]
conect =db.getSiblingDB('instituto')

result=conect.estudiantes_students.aggregate(tuberia)
console.log(result)