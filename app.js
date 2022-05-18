var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setFechaNac = function (fechaNac) {
        this.fechaNac = fechaNac;
    };
    Persona.prototype.getFechaNac = function () {
        return this.fechaNac;
    };
    Persona.prototype.getEdad = function () {
        return 0;
    };
    Persona.prototype.toString = function () {
        if (this.getFechaNac())
            return this.nombre + " " + this.apellido + " " + this.fechaNac;
        return this.nombre + " " + this.apellido;
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Estudiante.prototype.setCarrera = function (carrera) {
        this.carrera = carrera;
    };
    Estudiante.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " " + "Estudio" + " " + this.carrera;
    };
    return Estudiante;
}(Persona));
function loadPersonas() {
    var personas = new Array;
    var persona = new Persona("Eustaquia", "Pancracia");
    persona.setFechaNac(new Date(1990, 7, 5));
    personas.push(persona);
    persona = new Persona('armonia', 'luna');
    personas.push(persona);
    var estudiante = new Estudiante("Lorena", "Benitez"); /*creo el estudiante y lo guardo en el arreglo*/
    estudiante.setCarrera("Sistemas de Informacion");
    console.log(personas);
    personas.push(estudiante);
    personas.forEach(function (persona) {
        console.log(persona.toString());
    });
}
