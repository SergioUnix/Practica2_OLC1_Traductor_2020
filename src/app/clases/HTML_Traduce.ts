export class HTML_traduce{


  private cont_tabu:number;   private new_cadena:string;
  private cadena_Anterior:string;  private cadena_Result: string; 
  private auxi:number;  private aux_lexico:string = "";
  // Traduzco el Html
  private identificador_bool:boolean= true;   private atributo_actual:string = ""; 
  private ES_BR:boolean;  constructor(cadena_html:string){
      this.cont_tabu = 0 ;       this.new_cadena = cadena_html;
      
  }

  public getnew_cadena():string{
      return this.new_cadena;
  }
  public getCad_JSON():string{
      return this.cadena_Result;
  }

  private ejecuta_formato(){
  console.log("CADENA HTML: " + this.cadena_Anterior);
  this.new_cadena = "";          this.cadena_Result = "";
  this.cadena_Anterior += "\n";  this.auxi = 0; 
  this.aux_lexico = "";          let act:string =""; 
  let posPasado = 0;
  for(let i = 0 ; i < this.cadena_Anterior.length ; i++){
  act = this.cadena_Anterior[i]; 
  switch(this.auxi){
    case 0:
    if (act =="<")  { 
    posPasado = i;
       this.tab();        this.new_cadena += this.aux_lexico;       this.aux_lexico ="";
       this.new_cadena += "\n";       this.aux_lexico += this.cadena_Anterior[i];   this.auxi = 1; 
       }else{this.aux_lexico += this.cadena_Anterior[i];    }
    break;
    case 1:
    if (act =="/" && (posPasado - i == -1) )  {  
    this.aux_lexico += this.cadena_Anterior[i];
    this.auxi = 2;    this.tab();      this.new_cadena += this.aux_lexico;   this.cont_tabu--;                
    }else{    this.aux_lexico += this.cadena_Anterior[i];    this.auxi = 2 ; 
    this.cont_tabu++;    this.tab();      this.new_cadena += this.aux_lexico;  }
    this.aux_lexico =""; 
    break;
    case 2:
    if(act == ">" ){   this.new_cadena += this.cadena_Anterior[i];  this.new_cadena+="\n";  this.auxi = 0; 
    }else{  this.new_cadena += this.cadena_Anterior[i]; }
    break;   }}}


}