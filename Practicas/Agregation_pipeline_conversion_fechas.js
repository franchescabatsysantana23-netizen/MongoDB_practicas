let conexion;
let resultT;
let tuberia;


/*
%B → nombre completo del mes (September)
%d → día (25)
, → coma literal (debe coincidir exactamente)
%Y → año en 4 dígitos


{
  $project: {
    fecha: {
      $dateFromString: {
        dateString: { $trim: { input: "$date_added" } }, trim reduce espacios del campo date_added. 
        format: "%B %d, %Y",
        onError: null,
        onNull: null
      }
    }
  }
}


*/
tuberia =[{$project: {_id:0,date_added:1, fecha: {$dateFromString : {dateString:"$date_added", format: "%B %d, %Y"} } }}]

conexion = db.getSiblingDB("instituto2")

resultT=conexion.netflix_titles.csv.aggregate(tuberia)
console.log(resultT)