"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personas = void 0;
var Personas = /** @class */ (function () {
    function Personas(Nombre, Apellidos, Edad, DNI, Cumpleanos, ColorFavorito, Sexo, Direcciones, Mails, Telefonos, Notas) {
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._Edad = Edad;
        this._DNI = DNI;
        this._Cumpleanos = Cumpleanos;
        this._ColorFavorito = ColorFavorito;
        this._Sexo = Sexo;
        this._Direcciones = Direcciones;
        this._Mails = Mails;
        this._Telefonos = Telefonos;
        this._Notas = Notas;
    }
    Personas.prototype.getNombre = function () {
        return this._Nombre;
    };
    Personas.prototype.getAppellidos = function () {
        return this._Apellidos;
    };
    Personas.prototype.getEdad = function () {
        return this._Edad;
    };
    Personas.prototype.setEdad = function (value) {
        this._Edad = value;
    };
    Personas.prototype.getDNI = function () {
        return this._DNI;
    };
    Personas.prototype.getCumpleanos = function () {
        return this._Cumpleanos;
    };
    Personas.prototype.getcolorFavorito = function () {
        return this._ColorFavorito;
    };
    Personas.prototype.setcolorFavorito = function (value) {
        this._ColorFavorito = value;
    };
    Personas.prototype.getSexo = function () {
        return this._Sexo;
    };
    Personas.prototype.setSexo = function (value) {
        this._Sexo = value;
    };
    Personas.prototype.getDirecciones = function () {
        return this._Direcciones;
    };
    Personas.prototype.setDirecciones = function (value) {
        this._Direcciones = value;
    };
    Personas.prototype.getMails = function () {
        return this._Mails;
    };
    Personas.prototype.setMails = function (value) {
        this._Mails = value;
    };
    Personas.prototype.getTelefonos = function () {
        return this._Telefonos;
    };
    Personas.prototype.setTelefonos = function (value) {
        this._Telefonos = value;
    };
    Personas.prototype.getNotas = function () {
        return this._Notas;
    };
    Personas.prototype.setNotas = function (value) {
        this._Notas = value;
    };
    Personas.prototype.imprimirPersonas = function () {
        return ("Nombre:" + this._Nombre + "\n" + "Apellidos:" + this._Apellidos + "\n" + "Fecha de nacimiento:" + this._Cumpleanos + "\n" + "Edad:" + this._Edad + "\n" + "DNI:" + this._DNI + "\n" + "Sexo:" + this._Sexo + "\n" + "Direccion:" + this._Direcciones.imprimirDireccion() + "\n" + "Mail:" + this._Mails.imprimirMail() + "\n" + "Telefono:" + this._Telefonos.imprimirTelefono() + "\n" + "Su color favorito es:" + this._ColorFavorito + "\n" + "Notas:" + this._Notas);
    };
    return Personas;
}());
exports.Personas = Personas;
