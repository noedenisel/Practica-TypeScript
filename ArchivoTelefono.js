"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefonos = void 0;
var Telefonos = /** @class */ (function () {
    function Telefonos(TipoTelefono, NumeroTelefono) {
        this._TipoTelefono = TipoTelefono;
        this._NumeroTelefono = NumeroTelefono;
    }
    Telefonos.prototype.getTipoTelefono = function () {
        return this._TipoTelefono;
    };
    Telefonos.prototype.setTipoTelefono = function (v) {
        this._TipoTelefono = v;
    };
    Telefonos.prototype.getNumeroTelefono = function () {
        return this._NumeroTelefono;
    };
    Telefonos.prototype.setNumeroTelefono = function (v) {
        this._NumeroTelefono = v;
    };
    /*Imprimir Telefono*/
    Telefonos.prototype.imprimirTelefono = function () {
        return ("El telefono" + " " + this._TipoTelefono + " " + "es" + " " + this._NumeroTelefono);
    };
    return Telefonos;
}());
exports.Telefonos = Telefonos;
