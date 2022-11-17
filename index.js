const Usuario = require("./clases");

/*
console.log("¡Hola! soy un log");
console.warn("¡Hola! soy una advertencia");
console.error("¡Hola! soy un error");
*/

const usuario = new Usuario("María Victoria", "González Amato", ["el principito", "el amor en los tiempo del cólera"], ["perro", "gato", "conejo"] );
console.log(`Hola ${usuario.getNombre()} ${usuario.getApellido()}`);