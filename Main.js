"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArchivoDirecciones_1 = require("./ArchivoDirecciones");
var ArchivoTelefono_1 = require("./ArchivoTelefono");
var ArchivoMails_1 = require("./ArchivoMails");
var Personas_1 = require("./Personas");
/*Persona1*/
var direccion1 = new ArchivoDirecciones_1.Direcciones("Modern", "45", "1", "A", "08902", "Llobregat", "Barcelona");
var telefono1 = new ArchivoTelefono_1.Telefonos("Celular", " 623043242");
var mails1 = new ArchivoMails_1.Mails("Personal", "nah_lombardo@hotmail.com");
var persona1 = new Personas_1.Personas("Nahir", "Lombardo", "31", "Y6245669x", "30/06/1990", "rojo", "Femenino", direccion1, mails1, telefono1, "es mi hermana");
/*Persona2*/
var direccion2 = new ArchivoDirecciones_1.Direcciones("Tapia de Casariego", "3", "3", "D", "39710", "Cantabria", "Asturias");
var telefono2 = new ArchivoTelefono_1.Telefonos("Movil", "623039431");
var mails2 = new ArchivoMails_1.Mails("", "");
var persona2 = new Personas_1.Personas("Tomas Federico", "De Marco", "11", "72302380V", "11/10/2010 ", "Azul", "Masculino", direccion2, mails2, telefono2, "es mi sobrino");
/*Persona3*/
var direccion3 = new ArchivoDirecciones_1.Direcciones("Tapia de Casariego", "3", "3", "D", "39710", " Cantabria", "Asturias");
var telefono3 = new ArchivoTelefono_1.Telefonos("Movil", "664728103");
var mails3 = new ArchivoMails_1.Mails("Particular", "fededm@gmail.com");
var persona3 = new Personas_1.Personas("Federico Jose", "De Marco", "44", "123456789A", "11/04/1977", "negro ", "Masculino", direccion3, mails3, telefono3, "es el papa de Tomas");
/*Imprimir Persona*/
console.log(persona1.imprimirPersonas());
/*Buscar DNI*/
var PersonasParaBuscar = [persona1, persona2, persona3];
var DireccionesNuevas = new ArchivoDirecciones_1.Direcciones("Bolivar", "2782", "", "", "1752", "Lomas del Mirador", "Buenos Aires");
var MailsNuevos = new ArchivoMails_1.Mails("particular", "noedenisel@gmail.com");
var TelefonosNuevos = new ArchivoTelefono_1.Telefonos("Movil", "541133931511");
/*Cambiar datos*/
for (var i = 0; i < PersonasParaBuscar.length; i++) {
    if (PersonasParaBuscar[i]._DNI === "Y6245669x") {
        PersonasParaBuscar[i]._Direcciones = DireccionesNuevas;
        PersonasParaBuscar[i]._Mails = MailsNuevos;
        PersonasParaBuscar[i]._Telefonos = TelefonosNuevos;
    }
}
/*Sale error Property "_DNI" is private and only acces within class "Personas", pero imprime */
/*Imprimir Datos nuevos*/
console.log(persona1.imprimirPersonas());
