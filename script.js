const contenedor = document.getElementById("malla");

let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function desbloqueado(ramo){

    if(!ramo.prerrequisitos) return true;

    return ramo.prerrequisitos.every(r=>aprobados.includes(r));

}

function guardar(){

    localStorage.setItem("aprobados",JSON.stringify(aprobados));

}

function progreso(){

    let total=0;

    malla.forEach(s=>total+=s.ramos.length);

    let porcentaje=Math.round((aprobados.length/total)*100);

    document.getElementById("barra-progreso").style.width=porcentaje+"%";

    document.getElementById("porcentaje").innerText=porcentaje+"%";

}

function dibujar(){

    contenedor.innerHTML="";

    malla.forEach(sem=>{

        const columna=document.createElement("div");
        columna.className="semestre";

        const titulo=document.createElement("h2");
        titulo.innerText="Semestre "+sem.semestre;

        columna.appendChild(titulo);

        sem.ramos.forEach(ramo=>{

            const card=document.createElement("div");

            card.className="ramo";

            card.innerHTML=ramo.nombre;

            if(aprobados.includes(ramo.id)){

                card.classList.add("aprobado");

            }else if(desbloqueado(ramo)){

                card.classList.add("disponible");

                card.onclick=()=>{

                    aprobados.push(ramo.id);

                    guardar();

                    dibujar();

                }

            }else{

                card.classList.add("bloqueado");

            }

            columna.appendChild(card);

        });

        contenedor.appendChild(columna);

    });

    progreso();

}

dibujar();
