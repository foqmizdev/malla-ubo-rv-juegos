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



                // Estado aprobado
                if (aprobadas.includes(ramo.id)) {

                    tarjeta.classList.add("aprobada");

                }



                // Revisar requisitos
                let bloqueado = false;


                if (ramo.requisitos) {

                    ramo.requisitos.forEach(requisito => {

                        if (!aprobadas.includes(requisito)) {

                            bloqueado = true;

                        }

                    });

                }



                // Mostrar bloqueo
                if (bloqueado && !aprobadas.includes(ramo.id)) {

                    tarjeta.classList.add("bloqueado");
                    tarjeta.title = "Falta aprobar un prerrequisito";

                }



                tarjeta.addEventListener("click", () => {



                    // Si ya está aprobado, quitarlo
                    if (aprobadas.includes(ramo.id)) {


                        aprobadas = aprobadas.filter(
                            id => id !== ramo.id
                        );


                    } 
                    
                    // Si no está aprobado, intentar aprobar
                    else {


                        if (bloqueado) {

                            return;

                        }


                        aprobadas.push(ramo.id);

                    }



                    // Guardar progreso

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



        let progreso = Math.round(
            (aprobadas.length / total) * 100
        );



        barra.style.width = progreso + "%";


        porcentaje.textContent = progreso + "%";


    }





    crearMalla();

    actualizarProgreso();


});
