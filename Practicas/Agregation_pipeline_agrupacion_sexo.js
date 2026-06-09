let conexion;
let result;

conexion=db.getSiblingDB('instituto')

result= conexion.Titanic.aggregate([{ $group: { _id: '$Sex', totalRegistros: { $count: {} } } }])
console.log(result)



/*[
  { _id: 'male', totalRegistros: 577 },
  { _id: 'female', totalRegistros: 314 }
]*/