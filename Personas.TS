import { Direcciones } from "./ArchivoDirecciones";
import { Telefonos } from "./ArchivoTelefono";
import { Mails } from "./ArchivoMails";

export  class Personas {
    private _Nombre: string;
    private _Apellidos: string;
    private _Edad: string;
    private _DNI:string;
    private _Cumpleanos: string;
    private _ColorFavorito: string;
    private _Sexo: string;
    private _Direcciones: Direcciones
    private _Mails: Mails;
    private _Telefonos: Telefonos;
    private _Notas: string;

     constructor( Nombre: string,  Apellidos: string, Edad: string, DNI:string, Cumpleanos: string, ColorFavorito: string, Sexo: string, Direcciones: Direcciones, Mails: Mails,  Telefonos: Telefonos, Notas: string) {

        this ._Nombre= Nombre;
        this ._Apellidos= Apellidos;
        this ._Edad= Edad;
        this ._DNI= DNI;
        this ._Cumpleanos= Cumpleanos;
        this ._ColorFavorito= ColorFavorito;
        this ._Sexo= Sexo;
        this ._Direcciones=  Direcciones;
        this ._Mails= Mails;
        this ._Telefonos= Telefonos;
        this ._Notas= Notas;      
    }

    public getNombre(): string {
        return this._Nombre
    }

    public getAppellidos(): string {
        return this._Apellidos
    }
    

    public getEdad(): string {
        return this._Edad
    }
    public setEdad (value:string) {
        this._Edad= value;
    }


    public getDNI(): string {
        return this._DNI
    }
 

    public getCumpleanos(): string {
        return this._Cumpleanos
    }
   

    public getcolorFavorito(): string {
        return this._ColorFavorito
    }
    public setcolorFavorito (value:string) {
        this._ColorFavorito= value;
    }


    public getSexo(): string {
        return this._Sexo
    }
    public setSexo (value:string) {
        this._Sexo= value;
    }


    public getDirecciones(): Direcciones {
        return this._Direcciones
    }
    public setDirecciones (value:Direcciones) {
        this._Direcciones= value;
    }


    public getMails(): Mails {
        return this._Mails
    }
    public setMails (value:Mails) {
        this._Mails= value;
    }

    
    public getTelefonos(): Telefonos {
        return this._Telefonos
    }
    public setTelefonos (value: Telefonos) {
        this._Telefonos= value
    }

    
    public getNotas(): string {
        return this._Notas
    }
    public setNotas (value:string) {
        this._Notas= value;
    }


imprimirPersonas () {
    return ("Nombre:" + this ._Nombre + "\n" + "Apellidos:" + this ._Apellidos + "\n" + "Fecha de nacimiento:" + this ._Cumpleanos + "\n" + "Edad:" + this ._Edad + "\n" + "DNI:" + this ._DNI + "\n" + "Sexo:" + this ._Sexo + "\n" + "Direccion:" + this._Direcciones.imprimirDireccion()  + "\n" + "Mail:" + this ._Mails.imprimirMail() + "\n" + "Telefono:" + this._Telefonos.imprimirTelefono ()+ "\n" + "Su color favorito es:" + this ._ColorFavorito + "\n" + "Notas:" + this ._Notas)
}
}