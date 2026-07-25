document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("malla");
    const barra = document.getElementById("barra-progreso");
    const porcentaje = document.getElementById("porcentaje");

    let aprobadas = JSON.parse(localStorage.getItem("ramosAprobados")) || [];


    function crearMalla() {

        contenedor.innerHTML = "";


        malla.forEach(semestre => {

            const columna = document.createElement("div");
            columna.classList.add("semestre");


            const titulo = document.createElement("h2");
            titulo.textContent = "Semestre " + semestre.semestre;

            columna.appendChild(titulo);



            semestre.ramos.forEach(ramo => {

                const tarjeta = document.createElement("div");

                tarjeta.classList.add("ramo");

                tarjeta.textContent = ramo.nombre;



                // Si está aprobado
                if (aprobadas.includes(ramo.id)) {

                    tarjeta.classList.add("aprobada");

                }



                // Revisar prerrequisitos
                let bloqueado = false;


                if (ramo.prerrequisitos) {

                    ramo.prerrequisitos.forEach(req => {

                        if (!aprobadas.includes(req)) {

                            bloqueado = true;

                        }

                    });

                }



                if (bloqueado && !aprobadas.includes(ramo.id)) {

                    tarjeta.classList.add("bloqueado");
                    tarjeta.title = "Falta aprobar un prerrequisito";

                }



                tarjeta.addEventListener("click", () => {


                    // Si está aprobado, quitarlo
                    if (aprobadas.includes(ramo.id)) {


                        aprobadas = aprobadas.filter(
                            id => id !== ramo.id
                        );


                    } 
                    // Si no está aprobado, agregarlo
                    else {


                        if (bloqueado) {

                            return;

                        }


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


        malla.forEach(semestre => {

            total += semestre.ramos.length;

        });



        let avance = Math.round(
            (aprobadas.length / total) * 100
        );



        barra.style.width = avance + "%";

        porcentaje.textContent = avance + "%";


    }



    crearMalla();

    actualizarProgreso();


});
