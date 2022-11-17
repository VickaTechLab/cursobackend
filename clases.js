class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getNombre = () => this.nombre;
    getApellido = () => this.apellido;
    getFullName () {
        return `${this.nombre} ${this.apellido}`;
    };
    /*addBook(tit, aut) {
        let book = {
            "titulo": tit,
            "autor": aut,
        }
        this.libros.push(book);
    };*/
    getBookNames() {
        return this.libros;
    };
    getMascotas = () => this.mascotas;
    addMascota(mascota) {
        this.mascotas.push(mascota);
    };
    countMascotas() {
        return this.mascotas.length;
    };
}

module.exports = Usuario;