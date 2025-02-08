const assert = require("assert");  
const holamundo = require("./index"); 


assert.strictEqual(holamundo(), "Hola Mundo", "Error: La función no retorna 'Hola Mundo'");

console.log("Prueba pasada: holamundo() retorna correctamente 'Hola Mundo'.");
