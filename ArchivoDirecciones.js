"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direcciones = void 0;
var Direcciones = /** @class */ (function () {
    function Direcciones(Calle, Numero, Piso, Letra, CodigoPostal, Poblacion, Provincia) {
        this._Calle = Calle;
        this._Numero = Numero;
        this._Piso = Piso;
        this._Letra = Letra;
        this._CodigoPostal = CodigoPostal;
        this._Poblacion = Poblacion;
        this._Provincia = Provincia;
    }
    Direcciones.prototype.getCalle = function () {
        return this._Calle;
    };
    Direcciones.prototype.setCalle = function (value) {
        this._Calle = value;
    };
    Direcciones.prototype.getNumero = function () {
        return this._Numero;
    };
    Direcciones.prototype.setNumero = function (value) {
        this._Numero = value;
    };
    Direcciones.prototype.getPiso = function () {
        return this._Piso;
    };
    Direcciones.prototype.setPiso = function (value) {
        this._Piso = value;
    };
    Direcciones.prototype.getLetra = function () {
        return this._Letra;
    };
    Direcciones.prototype.setLetra = function (value) {
        this._Letra = value;
    };
    Direcciones.prototype.getCodigoPostal = function () {
        return this._CodigoPostal;
    };
    Direcciones.prototype.setCodigoPostal = function (value) {
        this._CodigoPostal = value;
    };
    Direcciones.prototype.getPoblacion = function () {
        return this._Poblacion;
    };
    Direcciones.prototype.setPoblacion = function (value) {
        this._Poblacion = value;
    };
    Direcciones.prototype.getProvincia = function () {
        return this._Provincia;
    };
    Direcciones.prototype.setProvincia = function (value) {
        this._Provincia = value;
    };
    /*Imprimir direccion en pantalla */
    Direcciones.prototype.imprimirDireccion = function () {
        return "Vive en" + " " + this._Calle + " " + this._Numero + ", Piso " + this._Piso + ", Dpto " + this._Letra + "," + this._Poblacion + "," + this._Provincia + ", CP " + this._CodigoPostal;
    };
    return Direcciones;
}());
exports.Direcciones = Direcciones;
