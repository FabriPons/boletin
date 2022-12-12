let nombreAlumno
let apellidoALumno
let cienciasNaturales
let cienciasSociales
let educacionArtistica
let educacionFisica
let ingles
let matematica
let practicaLenguaje
let construccion
let formacionReligiosa
let informatica

function boletin(){
    nombreAlumno = prompt("Ingrese nombre del alumno");
    apellidoALumno = prompt("Ingrese apellido del alumno");
    cienciasNaturales = prompt("Ingrese nota Naturales");
    cienciasSociales = prompt("Ingrese nota Sociales");
    educacionArtistica  = prompt("Ingrese nota Artistica");
    educacionFisica = prompt("Ingrese nota Educación Física");
    ingles = prompt("Ingrese nota");
    matematica = prompt("Ingrese nota Matemática");
    practicaLenguaje = prompt("Ingrese nota Práctica del Lenguaje");
    construccion = prompt("Ingrese nota Construcción Ciudadana");
    formacionReligiosa = prompt("Ingrese nota Formación Religiosa");
    informatica = prompt("Ingrese nota Informática");


    alert (`${apellidoALumno} ${nombreAlumno} posee las siguienntes notas ${cienciasNaturales} - ${cienciasSociales} - ${educacionArtistica} - ${educacionFisica} - ${ingles} - ${matematica} - ${practicaLenguaje} - ${construccion} - ${formacionReligiosa} - ${informatica} `);
}

boletin()

let inasistencias;
let justificadas;
let i;

function faltas(){
    inasistencias = prompt("Ingrese faltas del alumno");
    justificadas = prompt("Ingrese faltas justificadas");
}

faltas()

let resta = inasistencias - justificadas 

if ( resta <= 28){
   alert(`La condición es de Alumno Regular.`)
}else{
   alert(`perdío la condición de Regular, deberá rendir examen general.`)
}

for (let i = 28; i<=28; i++){
    alert (`Mantienes tu condicion de regular mientras tus inasistencias sean menos de: ${i}`)
}

// Acá se modifica el bootstrap
let brand = document.querySelector(".navbar-brand").textContent = `ALUMNO: ${apellidoALumno} ${nombreAlumno}`;

let ausentes = document.querySelector("#ausentes").textContent = ` posee ${inasistencias} faltas de las cuales ${justificadas} son justifcadas`;

