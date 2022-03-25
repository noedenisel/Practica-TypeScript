"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mails = void 0;
var Mails = /** @class */ (function () {
    function Mails(TipoMail, DireccionMail) {
        this._TipoMail = TipoMail;
        this._DireccionMail = DireccionMail;
    }
    Mails.prototype.getTipoMail = function () {
        return this._TipoMail;
    };
    Mails.prototype.setTipoMail = function (v) {
        this._TipoMail = v;
    };
    Mails.prototype.getDireccionMail = function () {
        return this._DireccionMail;
    };
    Mails.prototype.setDireccionMail = function (v) {
        this._DireccionMail = v;
    };
    /*Imprimir Mail*/
    Mails.prototype.imprimirMail = function () {
        return ("El mail" + " " + this._TipoMail + " " + "es" + " " + this._DireccionMail);
    };
    return Mails;
}());
exports.Mails = Mails;
