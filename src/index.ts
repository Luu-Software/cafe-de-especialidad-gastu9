import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalyestudiante: number
let totalycantidad: number

if (esEstudiante="si"){
    totalTexto / 0.9 = totalyestudiante
    totalyestudiante / personasTexto = totalycantidad
}
else{
    totalTexto = totalyestudiante
    totalyestudiante / personasTexto = totalycantidad
}

let totalPorPersona: number = totalycantidad; // COMPLETAR

console.log(`Total por persona: $${totalPorPersona}`);
