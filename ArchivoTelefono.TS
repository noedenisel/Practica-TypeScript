export  class Telefonos {
    private _TipoTelefono: string;
    private _NumeroTelefono: string;


    constructor (TipoTelefono: string, NumeroTelefono: string) {
        this._TipoTelefono= TipoTelefono;
        this ._NumeroTelefono= NumeroTelefono;
    }
 

    public getTipoTelefono() : string {
        return this._TipoTelefono
    }
    public setTipoTelefono (v : string) {
        this._TipoTelefono = v;
    }

    
    public getNumeroTelefono() : string {
        return this._NumeroTelefono
    }
    public setNumeroTelefono(v : string) {
        this._NumeroTelefono = v;
    }


    /*Imprimir Telefono*/
    imprimirTelefono (){
   return ("El telefono" + " "+ this._TipoTelefono +" "+"es"+ " " + this._NumeroTelefono)
    }
}