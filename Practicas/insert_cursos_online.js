let conexion; 

conexion = db.getSiblingDB('instituto')

conexion.cursos_online.insertMany([
{
  estudiante: "Juan Pérez",
  edad: 22,
  cursos_inscritos: ["MongoDB", "Python", "Data Science"],
  calificaciones: [85, 90, 88],
  intereses: ["Backend", "Bases de Datos", "IA"],
  pagos_realizados: [
    { curso: "MongoDB", monto: 120 },
    { curso: "Python", monto: 150 }
  ]
},
{
  estudiante: "María Gómez",
  edad: 25,
  cursos_inscritos: ["Frontend", "UX/UI"],
  calificaciones: [92, 87],
  intereses: ["Diseño", "Creatividad"],
  pagos_realizados: [
    { curso: "Frontend", monto: 130 }
  ]
},
{
  estudiante: "Carlos Ramírez",
  edad: 21,
  cursos_inscritos: ["Python", "Machine Learning", "MongoDB"],
  calificaciones: [78, 85, 80],
  intereses: ["IA", "Data Science"],
  pagos_realizados: [
    { curso: "Machine Learning", monto: 200 }
  ]
},
{
  estudiante: "Ana López",
  edad: 23,
  cursos_inscritos: ["Marketing Digital", "SEO", "Analytics"],
  calificaciones: [88, 90, 84],
  intereses: ["Marketing", "Estrategia"],
  pagos_realizados: [
    { curso: "Marketing Digital", monto: 110 }
  ]
},
{
  estudiante: "Luis Torres",
  edad: 24,
  cursos_inscritos: ["Java", "Spring Boot"],
  calificaciones: [82, 79],
  intereses: ["Backend", "APIs"],
  pagos_realizados: [
    { curso: "Java", monto: 140 }
  ]
},
{
  estudiante: "Sofía Martínez",
  edad: 20,
  cursos_inscritos: ["Data Science", "Machine Learning"],
  calificaciones: [95, 91],
  intereses: ["IA", "Big Data"],
  pagos_realizados: [
    { curso: "Data Science", monto: 210 }
  ]
},
{
  estudiante: "Pedro Sánchez",
  edad: 26,
  cursos_inscritos: ["Ciberseguridad", "Redes"],
  calificaciones: [89, 85],
  intereses: ["Seguridad", "Infraestructura"],
  pagos_realizados: [
    { curso: "Ciberseguridad", monto: 180 }
  ]
},
{
  estudiante: "Valeria Cruz",
  edad: 22,
  cursos_inscritos: ["UX/UI", "Photoshop", "Illustrator"],
  calificaciones: [90, 88, 86],
  intereses: ["Diseño", "Arte Digital"],
  pagos_realizados: [
    { curso: "UX/UI", monto: 125 }
  ]
},
{
  estudiante: "Diego Herrera",
  edad: 23,
  cursos_inscritos: ["Python", "Flask", "APIs REST"],
  calificaciones: [87, 85, 83],
  intereses: ["Backend", "Web"],
  pagos_realizados: [
    { curso: "Python", monto: 150 }
  ]
},
{
  estudiante: "Lucía Fernández",
  edad: 21,
  cursos_inscritos: ["Power BI", "Excel Avanzado"],
  calificaciones: [93, 89],
  intereses: ["Análisis de Datos"],
  pagos_realizados: [
    { curso: "Power BI", monto: 100 }
  ]
},
{
  estudiante: "Fernando Díaz",
  edad: 27,
  cursos_inscritos: ["DevOps", "Docker", "Kubernetes"],
  calificaciones: [84, 82, 80],
  intereses: ["Cloud", "Automatización"],
  pagos_realizados: [
    { curso: "DevOps", monto: 220 }
  ]
},
{
  estudiante: "Camila Reyes",
  edad: 19,
  cursos_inscritos: ["HTML", "CSS", "JavaScript"],
  calificaciones: [91, 88, 90],
  intereses: ["Frontend"],
  pagos_realizados: [
    { curso: "HTML", monto: 90 }
  ]
},
{
  estudiante: "Andrés Morales",
  edad: 28,
  cursos_inscritos: ["Blockchain", "Smart Contracts"],
  calificaciones: [76, 79],
  intereses: ["Fintech", "Criptomonedas"],
  pagos_realizados: [
    { curso: "Blockchain", monto: 250 }
  ]
},
{
  estudiante: "Natalia Vargas",
  edad: 22,
  cursos_inscritos: ["Data Science", "R Programming"],
  calificaciones: [88, 92],
  intereses: ["Estadística"],
  pagos_realizados: [
    { curso: "R Programming", monto: 160 }
  ]
},
{
  estudiante: "Jorge Castillo",
  edad: 24,
  cursos_inscritos: ["MongoDB", "NoSQL"],
  calificaciones: [83, 85],
  intereses: ["Bases de Datos"],
  pagos_realizados: [
    { curso: "MongoDB", monto: 120 }
  ]
},
{
  estudiante: "Paula Romero",
  edad: 23,
  cursos_inscritos: ["Scrum", "Gestión de Proyectos"],
  calificaciones: [94, 90],
  intereses: ["Project Management"],
  pagos_realizados: [
    { curso: "Scrum", monto: 130 }
  ]
},
{
  estudiante: "Ricardo León",
  edad: 25,
  cursos_inscritos: ["AWS", "Cloud Computing"],
  calificaciones: [89, 87],
  intereses: ["Cloud"],
  pagos_realizados: [
    { curso: "AWS", monto: 240 }
  ]
},
{
  estudiante: "Elena Navarro",
  edad: 20,
  cursos_inscritos: ["Marketing Digital", "E-commerce"],
  calificaciones: [90, 85],
  intereses: ["Ventas Online"],
  pagos_realizados: [
    { curso: "E-commerce", monto: 150 }
  ]
},
{
  estudiante: "Gabriel Soto",
  edad: 26,
  cursos_inscritos: ["Python", "Django"],
  calificaciones: [86, 88],
  intereses: ["Backend"],
  pagos_realizados: [
    { curso: "Django", monto: 170 }
  ]
},
{
  estudiante: "Laura Méndez",
  edad: 22,
  cursos_inscritos: ["SQL", "Bases de Datos"],
  calificaciones: [92, 91],
  intereses: ["Data Engineering"],
  pagos_realizados: [
    { curso: "SQL", monto: 130 }
  ]
},
{
  estudiante: "Hugo Rojas",
  edad: 29,
  cursos_inscritos: ["Inteligencia Artificial", "Deep Learning"],
  calificaciones: [85, 84],
  intereses: ["IA"],
  pagos_realizados: [
    { curso: "Deep Learning", monto: 300 }
  ]
},
{
  estudiante: "Daniela Castro",
  edad: 21,
  cursos_inscritos: ["UX/UI", "Figma"],
  calificaciones: [89, 92],
  intereses: ["Diseño"],
  pagos_realizados: [
    { curso: "Figma", monto: 115 }
  ]
},
{
  estudiante: "Martín Salas",
  edad: 24,
  cursos_inscritos: ["React", "JavaScript"],
  calificaciones: [88, 90],
  intereses: ["Frontend"],
  pagos_realizados: [
    { curso: "React", monto: 180 }
  ]
},
{
  estudiante: "Claudia Paredes",
  edad: 23,
  cursos_inscritos: ["Excel Avanzado", "Power BI"],
  calificaciones: [93, 94],
  intereses: ["Business Intelligence"],
  pagos_realizados: [
    { curso: "Excel Avanzado", monto: 95 }
  ]
},
{
  estudiante: "Iván Molina",
  edad: 27,
  cursos_inscritos: ["Ciberseguridad", "Ethical Hacking"],
  calificaciones: [81, 83],
  intereses: ["Seguridad Informática"],
  pagos_realizados: [
    { curso: "Ethical Hacking", monto: 260 }
  ]
}
]);
