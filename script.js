document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("malla");
    const barra = document.getElementById("barra-progreso");
    const porcentaje = document.getElementById("porcentaje");

    let aprobadas = JSON.parse(localStorage.getItem("ramosAprobados")) || [];

    function crearMalla() {

        contenedor.innerHTML = "";

        materias.forEach(semestre => {

            const columna = document.createElement("div");
            columna.classList.add("semestre");

            const titulo = document.createElement("h2");
            titulo.textContent = semestre.nombre;

            columna.appendChild(titulo);


            semestre.ramos.forEach(ramo => {

                const tarjeta = document.createElement("div");
                tarjeta.classList.add("ramo");

                tarjeta.textContent = ramo.nombre;


                // Si ya está aprobado
                if (aprobadas.includes(ramo.id)) {
                    tarjeta.classList.add("aprobada");
                }


                // Revisar prerrequisitos
                let desbloqueado = true;

                if (ramo.requisitos) {

                    ramo.requisitos.forEach(req => {

                        if (!aprobadas.includes(req)) {
                            desbloqueado = false;
                        }

                    });

                }


                if (!desbloqueado) {
                    tarjeta.classList.add("bloqueado");
                    tarjeta.title = "Debes aprobar los prerrequisitos primero";
                }


                tarjeta.addEventListener("click", () => {

                    if (!desbloqueado && !aprobadas.includes(ramo.id)) {
                        return;
                    }


                    // Activar / desactivar ramo
                    if (aprobadas.includes(ramo.id)) {

                        aprobadas = aprobadas.filter(id => id !== ramo.id);

                    } else {

                        aprobadas.push(ramo.id);

                    }


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


        let porcentajeActual = Math.round(
            (aprobadas.length / total) * 100
        );


        barra.style.width = porcentajeActual + "%";
        porcentaje.textContent = porcentajeActual + "%";

    }



    crearMalla();
    actualizarProgreso();

});
