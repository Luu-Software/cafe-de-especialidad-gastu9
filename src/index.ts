import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalyestudiante: number
let totalycantidad: number

if (esEstudiante="si"){
    totalyestudiante = Number(totalTexto) / 0.9
     totalycantidad = totalyestudiante / Number(personasTexto)
}
else{
    totalyestudiante = Number(totalTexto)
     totalycantidad = totalyestudiante / Number(personasTexto)
}

let totalPorPersona: number = totalycantidad; // COMPLETAR

console.log(`Total por persona: $${totalPorPersona}`);
