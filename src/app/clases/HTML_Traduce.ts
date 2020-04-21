export class HTML_traduce{


  private cont_tabu:number;   private new_cadena:string;
  private cadena_Anterior:string;  private cadena_Result: string; 
  private auxi:number;  private aux_lexico:string = "";  


  // Traduzco el Html
  private identificador_bool:boolean= true;   private atributo_actual:string = ""; 
  private Eti_br:boolean; 
 ////////////////////////////Realizo mi constructor 
  constructor(cadena_html:string){
      this.cont_tabu = 0 ;       this.new_cadena = cadena_html;
      this.cadena_Anterior = cadena_html;      this.ejecuta_formato();      this.Generate();      this.agrego_comi();
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

private Generate(){
  this.cont_tabu = 0 ;  this.cadena_Result = "";
  this.cadena_Anterior +=  "\n";  this.aux_lexico = ""; 
  let act:string ="";   let posPasado = 0;
  for(let i = 0 ; i < this.cadena_Anterior.length ; i++){
    act = this.cadena_Anterior[i]; 
    switch(this.auxi){
    case 0:
    if (act =="<")  { 
    posPasado = i;    this.t_();   this.aux_lexico = this.aux_lexico.trim();
    if(this.aux_lexico.length > 0 ){
    this.cadena_Result += "\"TEXT\":  " +"\"" +this.aux_lexico +"\""; }                     
    this.aux_lexico ="";  this.cadena_Result += "\n";  this.aux_lexico += "\"";  this.Eti_br = false;  this.auxi = 1; 
  }else{  this.aux_lexico += this.cadena_Anterior[i];   }
  break;
  case 1: 
  if (act =="/" && (posPasado - i == -1) )  {  
  this.aux_lexico += this.cadena_Anterior[i];  this.auxi = 3;  this.t_();   
  this.cadena_Result += "}";   this.cont_tabu--;
  }else{  this.aux_lexico += this.cadena_Anterior[i];   this.auxi = 2 ;
  let atributo:string = this.getAtributo_etiqueta(i);
  if(atributo[0] == "\""){  console.log("si es un atributo");  this.atributo_actual = atributo;
  }else{  console.log("VIENE-" + atributo );  this.atributo_actual  = "";   }
  if(atributo[0] == "b" || atributo[0] == "B" ){  this.Eti_br = true;  console.log("VIENE BR "  + atributo);  }
                  
  this.identificador_bool = true;  this.cont_tabu++;  this.t_();     this.cadena_Result += this.aux_lexico;   }
  this.aux_lexico =""; 
  break;
  case 2: 
 if(act == ">" ){
  this.cadena_Result += this.aux_lexico;  this.aux_lexico ="";  this.cadena_Result+= "\":{\n"
  if(this.atributo_actual.length != 0 ){  this.t_();  this.cadena_Result+="\"STYLE\":"+this.atributo_actual+"\n";  }
  this.auxi = 0;
  if(this.Eti_br == true){
  this.t_();   this.cadena_Result+="}\n"; this.cont_tabu--;  } 
  }else{ if(act == " "){  this.aux_lexico.trim();
  if(this.aux_lexico.length != 0 && this.identificador_bool == true ){  
  this.cadena_Result += this.aux_lexico;  this.identificador_bool = false;  }
  this.aux_lexico="";
  }else if(this.identificador_bool == true){
  if(act != "\n"){  this.aux_lexico+= act;  } } }  break;
  case 3:
  if(act == ">" ){
  this.auxi = 0 ;   this.aux_lexico =""; this.new_cadena+="\n";
  }else{   }                  
  break;
  }}}


  private tab():void {
  for (let i:number = 0; i < this.cont_tabu ; i++){     this.new_cadena += "\t";    }}

 ///trabajo las comillas ahora

  private getSig(i:number): string{
  let k:number = 0 ; 
 let sig:string = this.cadena_Result[i+1];
  while (sig ==" "|| sig =="\n" || sig =="\t" || sig=="\r"){
  k++;
  sig = this.cadena_Result[i + k];
  } return sig;}

  private getAtributo_etiqueta(x:number): string{
  let char_actual:string;  let ATRIB:string = ""; 
  for(let i = x ; i < this.cadena_Anterior.length ; i++){
 char_actual = this.cadena_Anterior[i]; 
  if(char_actual == "="){
  ATRIB=""; }else if(char_actual == ">"){
  break;}
  else{  ATRIB += char_actual;  }}
  ATRIB = ATRIB.trim();
 if(ATRIB[0] == "\""){
  console.log("RETORNA ATRIBUTO: "+ATRIB); }
  return ATRIB; 
  }
  
public agrego_comi(){
  let nueva_cadena_json_con_comillas:string="";  let actual:string = "";
 for(let indice = 0 ; indice < this.cadena_Result.length ; indice++){
  actual = this.cadena_Result[indice]; 
  if(actual == "}"){
   // /////////// numero 1
  let sig:any = this.getSig(indice); 
  if(sig == "\""){  nueva_cadena_json_con_comillas +=actual+",";
   }else{   nueva_cadena_json_con_comillas +=actual;} 
 }else if(actual == "\""){
//////////   numero 2
 let siguiente:any = this.getSig(indice);
if(siguiente == "\""){  nueva_cadena_json_con_comillas +=actual+",";
  }else { nueva_cadena_json_con_comillas +=actual;}
}else{
  //////////////// numero 3
  nueva_cadena_json_con_comillas +=actual;
  } }
  this.cadena_Result = nueva_cadena_json_con_comillas; 
  }

  private t_():void {
  for (let i:number = 0; i < this.cont_tabu ; i++){  this.cadena_Result += "\t";}}
  


}