export  class Mails {
    private _TipoMail: string;
    private _DireccionMail: string;


    constructor (TipoMail: string, DireccionMail: string) {
        this._TipoMail = TipoMail;
        this ._DireccionMail = DireccionMail;
    }
 
    
    public getTipoMail() : string {
        return this._TipoMail
    }
    public setTipoMail (v : string) {
        this._TipoMail = v;
    }

    
    public getDireccionMail () : string {
        return this._DireccionMail
    }
    public setDireccionMail (v : string) {
        this._DireccionMail = v;
    }


    /*Imprimir Mail*/
    imprimirMail (){
    return ("El mail" + " "+ this._TipoMail + " " + "es"+ " " + this._DireccionMail)
    }
}
