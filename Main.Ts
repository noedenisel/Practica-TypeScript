import { Direcciones } from "./ArchivoDirecciones";
import { Telefonos } from "./ArchivoTelefono";
import { Mails } from "./ArchivoMails";
import { Personas } from "./Personas";


/*Persona1*/
let direccion1 = new Direcciones("Modern", "45","1", "A","08902","Llobregat", "Barcelona")
let telefono1= new Telefonos ("Celular"," 623043242")
let mails1 = new Mails ("Personal", "nah_lombardo@hotmail.com")
let persona1  = new Personas ( "Nahir", "Lombardo","31", "Y6245669x","30/06/1990", "rojo","Femenino", direccion1, mails1, telefono1, "es mi hermana")


/*Persona2*/
let direccion2= new Direcciones ("Tapia de Casariego" , "3", "3","D", "39710","Cantabria","Asturias")
let telefono2= new Telefonos("Movil","623039431")
let mails2 = new Mails ("", "")
let persona2 = new Personas ("Tomas Federico", "De Marco", "11", "72302380V", "11/10/2010 ", "Azul", "Masculino" , direccion2, mails2, telefono2,"es mi sobrino")


/*Persona3*/
let direccion3 =new Direcciones ("Tapia de Casariego" , "3", "3","D","39710"," Cantabria","Asturias")
let telefono3= new Telefonos("Movil", "664728103")
let mails3= new Mails( "Particular","fededm@gmail.com")
let persona3 = new Personas ("Federico Jose" ,"De Marco" ,"44", "123456789A", "11/04/1977", "negro ", "Masculino", direccion3, mails3, telefono3,  "es el papa de Tomas")

/*Imprimir Persona*/
console.log(persona1.imprimirPersonas()) 

/*Buscar DNI*/
let PersonasParaBuscar = [persona1, persona2, persona3]


let DireccionesNuevas = new Direcciones ("Bolivar", "2782", "", "", "1752", "Lomas del Mirador", "Buenos Aires")
let MailsNuevos = new Mails ("particular", "noedenisel@gmail.com")
let TelefonosNuevos = new Telefonos ( "Movil", "541133931511")

/*Cambiar datos*/
for (let i=0; i < PersonasParaBuscar.length ; i++) {
   if (PersonasParaBuscar[i]._DNI === "Y6245669x"  ){
       PersonasParaBuscar[i]._Direcciones = DireccionesNuevas;
       PersonasParaBuscar[i]._Mails = MailsNuevos;
       PersonasParaBuscar[i]._Telefonos= TelefonosNuevos;
   }
}

/*Sale error Property "_DNI" is private and only acces within class "Personas", pero imprime */

/*Imprimir Datos nuevos*/

console.log(persona1.imprimirPersonas())


