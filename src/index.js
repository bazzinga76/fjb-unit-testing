//import { esPar, arrayEsPar, calculateLength, diaSemana, horaActual,  ordenaArray, mayusculas } from '../src/modules/Functions.js';
//import * as  Functions from '../src/modules/Functions.js';
//const { esPar, arrayEsPar, calculateLength, diaSemana, horaActual,  ordenaArray, mayusculas }  = Functions;
const { esPar, arrayEsPar, calculateLength, diaSemana, horaActual, ordenaArray, mayusculas } = require('../src/modules/Functions.js');

console.log("esPar(2):");
console.log(esPar(2));
console.log("arrayEsPar([2,4,6,8,10]):");
console.log(arrayEsPar([2,4,6,8,10]));
console.log('calculateLength("Hola"):');
console.log(calculateLength("Hola"));
console.log("diaSemana(5):");
console.log(diaSemana(5));
console.log("horaActual():");
console.log(horaActual());
console.log("ordenaArray([3,5,2,4,1]):");
console.log(ordenaArray([3,5,2,4,1]));
console.log('mayusculas("minusculas"):');
console.log(mayusculas("minusculas"));




// const express = require('express');
// const app = express();

// const port = 3000;

// app.get('/', (req, res) => {
//     console.log("solicitaron una respuesta")
//     res.send("hola desde express")
// });

// app.listen(port, () => console.log(`running en el puerto ${port}`));