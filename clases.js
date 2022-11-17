class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getNombre = () => this.nombre;
    getApellido = () => this.apellido;
    getLibros = () => this.libros;
    getMascotas = () => this.mascotas;
}

module.exports = Usuario;