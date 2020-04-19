//import { Estatico} from './Estatico';// lo importo

export class token{
    public static contador_token:number = 1 ;
    private fila:number;
    private columna:number;
    private tipo:string;
    private valor:string;
    private id:number;
  
constructor(){
          //this.fila = Estatico.FILAS;
          // this.columna = Estatico.COLUMNAS;
            this.valor = "";
            this.tipo = "";            
            this.id = token.contador_token;
            token.contador_token++;
}

public setValor(Val_:string){
    this.valor=Val_;
}

public setTipo(Tip:string){
    this.tipo=Tip;
}

public setColumna(col:number){
    this.columna=col;
}

public setFila(fil:number){
    this.fila=fil;
}

public getID():number{
    return this.id;
}

public getValor():string
{
    return this.valor;
}

public  getTipo():string
{
    return this.tipo;
}

public  getFila() :number
{
    return this.fila;
}
public getColumna():number
{
    return this.columna;
}

}