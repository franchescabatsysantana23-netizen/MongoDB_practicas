let conect;
let result;
let tuberia;

tuberia =[
    
    {$project: {
        estudiante:1,
        calificaciones:1,
        nota_inverso:{$reverseArray:"$calificaciones"} // retorna los valores contenido en el arreglo de 
        // en forma inversa.
    }}

]


conect =db.getSiblingDB('instituto')

result=conect.cursos_online.aggregate(tuberia)
console.log(result)