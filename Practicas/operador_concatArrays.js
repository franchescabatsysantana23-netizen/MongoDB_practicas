let conect;
let result;
let tuberia; 

tuberia =[{$project: {Arreglo_concatenado: {$concatArrays:[['payments:','$payments'],['items:','$items']]}}}]

conect=db.getSiblingDB('instituto')
result=conect.customer.aggregate(tuberia)
console.log(result)