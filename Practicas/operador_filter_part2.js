let conect;
let result;

//cond: {'$$interes.0':{$eq:'Backend'} }

tuberia=[{$project:
    {
        estudiante:1,
        intereses:1,
        filtro: {
            $filter:{
                input:"$intereses",
                 as: 'interes',
                 cond:{
                    $eq:["$$interes",'Backend'
                ]
          }
        }
      }
    }
  }
]
conect =db.getSiblingDB('instituto')
result=conect.cursos_online.aggregate(tuberia)
console.log(result)
