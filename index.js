const Usuario = require("./clases");

/*
console.log("¡Hola! soy un log");
console.warn("¡Hola! soy una advertencia");
console.error("¡Hola! soy un error");
*/

const usuario = new Usuario("María Victoria", "González Amato", [{"titulo":"El Alquimista", "autor":"Pablo Coelho"},{"titulo":"Cien años de Soledad",  "autor":"Gabriel García Márquez"} ], ["perro"]);
console.log(`Hola ${usuario.getFullName()}.
¡Espero que estés muy bien!
`);

usuario.addMascota("gatito");
usuario.addMascota("pato");
console.log(`Mascotas: ${usuario.getMascotas()},
Total de mascotas ${usuario.countMascotas()}
`);

//usuario.addBook("El Alquimista", "Pablo Coelho");
//usuario.addBook("Cien años de Soledad", "Gabriel García Márquez");
console.log(`Nombres de libros: ${usuario.getBookNames()}
`);