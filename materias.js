const malla = [

{
semestre:1,
ramos:[
{nombre:"Álgebra",id:"algebra"},
{nombre:"Algoritmos Multimedia",id:"algoritmos"},
{nombre:"Identidad Universitaria I",id:"iu1"},
{nombre:"Lengua Extranjera I",id:"idioma1"}
]
},

{
semestre:2,
ramos:[
{
nombre:"Geometría Analítica",
id:"geometria",
prerrequisitos:["algebra"]
},
{nombre:"POO Multimedia",id:"poo"},
{nombre:"Cálculo",id:"calculo"},
{nombre:"Identidad Universitaria II",id:"iu2"},
{nombre:"Lengua Extranjera II",id:"idioma2"}
]
},

{
semestre:3,
ramos:[
{
nombre:"Estadística",
id:"estadistica",
prerrequisitos:["geometria"]
},
{
nombre:"Mecánica para Simulación",
id:"mecanica",
prerrequisitos:["calculo"]
},
{nombre:"Estructura de Datos",id:"estructura"},
{nombre:"Formación Ética para el Desarrollo Sostenible",id:"etica"},
{nombre:"Lengua Extranjera III",id:"idioma3"}
]
},

{
semestre:4,
ramos:[
{nombre:"Física para Videojuegos",id:"fisica"},
{nombre:"Modelos de Administración de Datos",id:"datos"},
{nombre:"Desarrollo Web",id:"web"},
{nombre:"Responsabilidad Social Universitaria",id:"rsu"},
{nombre:"Lengua Extranjera IV",id:"idioma4"}
]
},

{
semestre:5,
ramos:[
{nombre:"Producción Multimedia",id:"produccion"},
{nombre:"Programación Avanzada",id:"prograav"},
{nombre:"Economía",id:"economia"},
{nombre:"Administración y Gestión del Talento Humano",id:"gestion"},
{nombre:"Electivo de Formación General I",id:"electivo1"}
]
},

{
semestre:6,
ramos:[
{nombre:"Herramientas 3D",id:"herramientas"},
{nombre:"Producción 2D",id:"produccion2d"},
{nombre:"Nuevas Tecnologías de Desarrollo 3D",id:"nt3d"},
{nombre:"Interfaces y Experiencia de Usuario",id:"ux"},
{nombre:"Electivo de Formación General II",id:"electivo2"}
]
},

{
semestre:7,
ramos:[
{nombre:"Modelado Orgánico",id:"modelado"},
{nombre:"Animación",id:"animacion"},
{nombre:"Animación Avanzada",id:"animacion2"},
{nombre:"Optimización de Videojuegos",id:"optimizacion"},
{nombre:"Lógica Digital y Hápticos",id:"logica"}
]
},

{
semestre:8,
ramos:[
{nombre:"Fundamentos de Videojuegos",id:"fundamentos"},
{nombre:"Escenario de Videojuegos",id:"escenario"},
{nombre:"Diseño de Videojuegos en Línea",id:"online"},
{nombre:"Videojuegos Mobile",id:"mobile"},
{nombre:"Innovación, Tecnología y Analítica de Datos",id:"innovacion"},
{nombre:"Realidad Virtual",id:"rv"},
{nombre:"I+D para Inteligencia Artificial",id:"ia"}
]
},

{
semestre:9,
ramos:[
{nombre:"Inteligencia Artificial para Videojuegos",id:"ia2"},
{nombre:"Nuevas Tecnologías Aplicadas",id:"nta"},
{nombre:"Efectos Especiales",id:"fx"},
{nombre:"Marketing Digital",id:"marketing"},
{nombre:"Preparación de Proyectos y Metodología",id:"proyectos"},
{nombre:"Práctica Profesional",id:"practica"},
{nombre:"Optativo de Certificación",id:"optativo"},
{nombre:"Actividad de Titulación",id:"titulo"}
]
}

];
