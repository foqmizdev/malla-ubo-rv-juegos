document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("malla");
    const barra = document.getElementById("barra-progreso");
    const porcentaje = document.getElementById("porcentaje");

    let aprobadas = JSON.parse(localStorage.getItem("ramosAprobados")) || [];


    function crearMalla() {

        contenedor.innerHTML = "";


        materias.forEach(semestre => {

            const columna = document.createElement("div");
            columna.className = "semestre";


            const titulo = document.createElement("h2");
            titulo.textContent = semestre.nombre;

            columna.appendChild(titulo);



            semestre.ramos.forEach(ramo => {


                const tarjeta = document.createElement("div");
                tarjeta.className = "ramo";

                tarjeta.textContent = ramo.nombre;



                // Si está aprobado
                if (aprobadas.includes(ramo.id)) {

                    tarjeta.classList.add("aprobada");

                }



                // Revisar prerrequisitos
                let bloqueado = false;


                if (ramo.requisitos && ramo.requisitos.length > 0) {

                    ramo.requisitos.forEach(req => {

                        if (!aprobadas.includes(req)) {

                            bloqueado = true;

                        }

                    });

                }



                // Agregar bloqueo visual
                if (bloqueado && !aprobadas.includes(ramo.id)) {

                    tarjeta.classList.add("bloqueado");
                    tarjeta.title = "Debes aprobar el prerrequisito primero";

                }



                tarjeta.addEventListener("click", () => {


                    // Si ya está aprobado -> quitar aprobación
                    if (aprobadas.includes(ramo.id)) {


                        aprobadas = aprobadas.filter(
                            id => id !== ramo.id
                        );


                    } 
                    
                    // Si no está aprobado -> aprobar
                    else {


                        if (bloqueado) {

                            return;

                        }


                        aprobadas.push(ramo.id);

                    }



                    // Guardar

                    localStorage.setItem(
                        "ramosAprobados",
                        JSON.stringify(aprobadas)
                    );



                    crearMalla();

                    actualizarProgreso();


                });



                columna.appendChild(tarjeta);


            });



            contenedor.appendChild(columna);


        });


    }




    function actualizarProgreso() {


        let total = 0;


        materias.forEach(semestre => {

            total += semestre.ramos.length;

        });



        let porcentajeActual = 0;


        if (total > 0) {

            porcentajeActual = Math.round(
                (aprobadas.length / total) * 100
            );

        }



        barra.style.width = porcentajeActual + "%";

        porcentaje.textContent = porcentajeActual + "%";


    }




    crearMalla();

    actualizarProgreso();


});
