export class Direcciones {
    private _Calle: string;
    private _Numero: string;
    private _Piso:string;
    private _Letra: string;
    private _CodigoPostal: string;
    private _Poblacion: string;
    private _Provincia: string;

     constructor(Calle: string, Numero: string, Piso:string, Letra: string, CodigoPostal: string, Poblacion: string,  Provincia: string) {
        this ._Calle= Calle;
        this ._Numero= Numero;
        this ._Piso= Piso;
        this ._Letra= Letra;
        this ._CodigoPostal= CodigoPostal;
        this ._Poblacion= Poblacion;
        this ._Provincia= Provincia;      
    }

    public getCalle(): string {
        return this._Calle
    }
    public setCalle (value:string) {
        this._Calle= value;
    }


    public getNumero(): string {
        return this._Numero
    }
    public setNumero (value:string) {
        this._Numero= value;
    }


    public getPiso(): string {
        return this._Piso
    }
    public setPiso (value: string) {
        this._Piso= value;
    }


    public getLetra(): string {
        return this._Letra
    }
    public setLetra (value:string) {
        this._Letra= value;
    }


    public getCodigoPostal(): string {
        return this._CodigoPostal
    }
    public setCodigoPostal (value:string) {
        this._CodigoPostal= value;
    }


    public getPoblacion(): string {
        return this._Poblacion
    }
    public setPoblacion (value:string) {
        this._Poblacion= value;
    }

    
    public getProvincia(): string {
        return this._Provincia
    }
    public setProvincia (value:string) {
        this._Provincia= value;
    }


/*Imprimir direccion en pantalla */
imprimirDireccion (){
    return "Vive en" + " " + this._Calle +  " "+ this._Numero + ", Piso " + this._Piso + ", Dpto " + this._Letra + "," +  this._Poblacion + "," + this._Provincia + ", CP " + this._CodigoPostal
}
}
