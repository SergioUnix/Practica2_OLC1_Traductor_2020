import {token}from 'src/app/clases/token';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';




export class Sintactico{

public contadorTab:number;
public cadena_traducida:string;
public acept_r_met; public acep_r_fun; public el_switch; public s_continue;public s_break;
    
public getCadena_traducida():string{
   return this.cadena_traducida;
}



iterador:number;


public puntual_Token:token; 
public listaTokens:any = [];
public sig :number;
public hay_error:boolean; 


constructor(tokens:any[]){

   
    this.contadorTab=0;
    this.cadena_traducida="";
    this.s_continue=false;   this.s_break=false;        this.hay_error=false;
    this.listaTokens = tokens;
    this.sig = 0 ; 
    this.puntual_Token = this.listaTokens[this.sig];
    // Mensaje de Inicio del Analisis
    console.log("Empezando a Analizar el Documento");

    //this.ignoraComentarios();
    this.inicio();
    console.log("Termina el Analisis Sintactico");
    

    this.acept_r_met=false;
   this.acep_r_fun=false;
 
    }






    private inicio(){   
       // this.parea("P_void"); 
        //this.parea("P_apertura");
        //this.parea("P_cierre")
        //this.parea("Llave_apertura");  
        //this.Lista_inst(); 
        //this.parea("Llave_cierre"); 
        //this.parea("Ultimo");  //aceptacion
        this.sentencia_clase(); this.lista_claseP(); this.parea("Ultimo");    
    }    
    
    private lista_claseP(){
        if(this.puntual_Token.getTipo()=="P_class"){
            this.sentencia_clase();
            this.lista_claseP(); ///Realiza la recursion
        }else{  }   
        }

    private sentencia_clase(){       
        this.parea("P_class");   
        this.parea("variable"); 
         this.parea("Llave_apertura"); 
     //      this.Lista_inst();  //la otra prueba que realice
     this.ListDeclar_metodoFun();
     
            this.parea("Llave_cierre");    
    }







private ListDeclar_metodoFun(){
      if (this.puntual_Token.getTipo()=="P_void"){
          this.Declaracion();
           this.ListDeclar_metodoFunP();
      }else{}
}
private ListDeclar_metodoFunP(){
    if (this.puntual_Token.getTipo()=="P_void"){
        this.Declaracion();
        this.ListDeclar_metodoFunP();
    }else{}


}
private Declar_dentro_metodoFun(){
    this.Tipo(); this.parea("variable");  this.DeclaracionP_metodos();
}

private DeclaracionP_metodos(){
    this.Lista_ids();
    this.asignacion();
    this.parea("Punto_coma");
}


private Tipo(){
//this.ingoraComentarios();
if (this.puntual_Token.getTipo() == "P_int") {             
    this.parea("P_int");
}else if (this.puntual_Token.getTipo() == "P_double"){
    this.parea("P_double"); 
}else if (this.puntual_Token.getTipo() == "P_char"){
    this.parea("P_char");
}else if (this.puntual_Token.getTipo() == "P_string"){
    this.parea("P_string");
}else {   this.parea("P_bool");  }

}


///////////////////////////////////////////////////////////////////
    private Lista_inst(){
        this.Instruccion();    this.Lista_instPrim();
    }

  ////////////////////////////////////////////////////  
    private Lista_instPrim(){
        if (this.puntual_Token.getTipo() == "P_if")
        {             
            this.Instruccion();
            this.Lista_instPrim();           
        }
        else if (this.puntual_Token.getTipo() == "P_console")
        {             
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "variable")
        {             
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_int" || this.puntual_Token.getTipo() == "P_double"  
        || this.puntual_Token.getTipo() == "P_char" || this.puntual_Token.getTipo() == "P_string"  || this.puntual_Token.getTipo() == "P_bool"
        ||this.puntual_Token.getTipo()=="P_void")  //variables char, bool, string, int, 
        {           
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_while")
        {            
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_do")  //variables char, bool, string, int, 
        {
            this.Instruccion();
            this.Lista_instPrim();
    
        }
        else if (this.puntual_Token.getTipo() == "P_for")
        {             
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_switch")
        {             
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_return"&& this.acept_r_met==true)
        {            
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_return"&& this.acep_r_fun==true)
        {           
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_continue"&&this.s_continue==true)
        {              
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.puntual_Token.getTipo() == "P_break"&&this.el_switch==true)
        {            
            this.Instruccion();
            this.Lista_instPrim();
        }

    }



    ////////////////////////////////////////////////////////////

    private Instruccion(){ // Instrucciones que reconozco
    // this.ignoraComentarios(); 
     
    if (this.puntual_Token.getTipo() == "P_if")
    {        
        this.sentencia_if();
    }
    else if (this.puntual_Token.getTipo() == "P_console")
    {            
        this.SentenciaImprime();
    }
    else if (this.puntual_Token.getTipo() == "P_switch")
    {            
        this.SentenciaSwitch_case();
    }
    else if (this.puntual_Token.getTipo() == "P_int" || this.puntual_Token.getTipo() == "P_double"  
    || this.puntual_Token.getTipo() == "P_char" || this.puntual_Token.getTipo() == "P_string"  || this.puntual_Token.getTipo() == "P_bool"
    ||this.puntual_Token.getTipo()=="P_void")  //variables char, bool, string, int, 
    {
        //this.Declaracion(); ///la prueba que realice antes
        this.Declar_dentro_metodoFun();
    }
    else if (this.puntual_Token.getTipo() == "variable")
    {             
        this.asignacionSimple();
    }
    else if (this.puntual_Token.getTipo() == "P_while")
    {            
        this.sentencia_while();
    }
    else if (this.puntual_Token.getTipo() == "P_do")
    {              
        this.Sentencia_do_while();
    }
    else if (this.puntual_Token.getTipo() == "P_for")
    {            
        this.sentencia_for();
    }
    else if (this.puntual_Token.getTipo() == "P_return"&&this.acept_r_met==true)
    {              
        this.sentencia_return_metodos();
    }
    else if (this.puntual_Token.getTipo() == "P_return"&&this.acep_r_fun==true)
    {             
        this.sentencia_return_funciones();
    }
    else if (this.puntual_Token.getTipo() == "P_return"&&this.s_continue==true)
    {             
        this.sentencia_continue();
    }else{

    }

	}      
    


    
private sentencia_return_funciones(){
    this.parea("P_return");
    this.expresion();
    this.parea("Punto_coma");
}

private sentencia_return_metodos(){
    this.parea("P_return");
    this.parea("Punto_coma");
}
private sentencia_continue(){
this.parea("P_continue");
this.parea("Punto_coma");
}

    private sentencia_break(){
        this.parea("P_break");
        this.parea("Punto_coma");
    }
private ListaIns_entreLLaves(){
    this.parea("Llave_apertura");
    this.Lista_inst();
    this.parea("Llave_cierre");
}


    private SentenciaImprime():void{
        this.parea("P_console");
        this.parea("Punto");
        this.parea("P_write");
        this.parea("P_apertura");
        this.expresion();
        this.parea("P_cierre");
        this.parea("Punto_coma");
    }


private opcionMetodoFuncion(){
    if (this.puntual_Token.getTipo() == "P_cierre"){
       this.parea("P_cierre");
   this.ListaIns_entreLLaves();
   this.acept_r_met=false;
   this.acep_r_fun=false;
    }else{ 
        this.parea("tipo");
        this.parea("variable");
        this.lista_parametros();
        this.parea("P_cierre");
        this.ListaIns_entreLLaves();
   this.acept_r_met=false;
   this.acep_r_fun=false;
        
        
  }

}


    private lista_parametros(){
        if (this.puntual_Token.getTipo() == "Coma"){
            this.parea("Coma");
            this.parea("tipo");
            this.parea("variable");
            this.lista_parametros();
        }else{ }
    }

private Declaracion(){
   if (this.puntual_Token.getTipo() == "P_void"){
     this.parea("P_void");
     this.parea("variable");
     this.parea("P_apertura");
     this.opcionMetodoFuncion();

     
        }else{
this.parea("tipo");
this.parea("variable");
this.DeclaracionPrim();
}
    }



private DeclaracionPrim(){
     if (this.puntual_Token.getTipo() == "P_apertura"){
     this.parea("P_apertura");
     this.acep_r_fun=true;
     this.opcionMetodoFuncion();
     }else{
         this.Lista_ids();
         this.asignacion();
         this.parea("Punto_coma");
        }
    }


private Lista_ids(){
    if (this.puntual_Token.getTipo() == "Coma"){
    this.parea("Coma");
    this.parea("variable");
    this.Lista_ids();
    }else{}
}
    
private asignacion(){
    if (this.puntual_Token.getTipo() == "Igual"){
        this.parea("Igual");
        this.expresion();
    }else{}
    

}

private asignacionSimple(){
    this.parea("variable");
    this.OpcionAsignacion();
}

private OpcionAsignacion(){
    if (this.puntual_Token.getTipo() == "Igual"){
this.parea("Igual");
this.expresion();
this.parea("Punto_coma");
    }else{
        this.parea("P_apertura");
        this.sentencia_llama_metodo();
        this.parea("Punto_coma");

    }
}


//////////////////////////  Do while
private Sentencia_do_while(){
    this.s_continue=true;
    this.s_break=true;
     this.parea("P_do");
     this.ListaIns_entreLLaves();
     this.parea("P_while");
     this.parea("P_apertura");
     this.list_condicional();
     this.parea("P_cierre");
     this.parea("Punto_coma");
    this.s_continue=false;
    this.s_break=false;
}


/////////////////////////


private ListaExpresiones(){
    this.expresion();
    this.Lista_expresionP();
}

private Lista_expresionP(){
    if(this.puntual_Token.getTipo()=="Coma"){
    this.parea("Coma");
    this.expresion();
    this.Lista_expresionP();
    }else{}
}

      

/////////////////////////                If
    private sentencia_if(){
        this.parea("P_if");
        this.parea("P_apertura");
        this.list_condicional();
        this.parea("P_cierre");
        this.ListaIns_entreLLaves();
        this.elsePrim();       
    }
    private elsePrim(){
        if(this.puntual_Token.getTipo()=="P_else"){
        this.parea("P_else");
        this.multiplesIf();}else{}
    }
    private multiplesIf(){
        if(this.puntual_Token.getTipo()=="Llave_apertura"){
        this.ListaIns_entreLLaves();
        }else{
        this.sentencia_if();
        }     
        }
 ////////////////////////      while                  
private sentencia_while(){
    this.s_continue=true;
    this.s_break=true;
    this.parea("P_while");
    this.parea("P_apertura");
    this.list_condicional();
    this.parea("P_cierre");
    this.ListaIns_entreLLaves();
    this.s_continue=false;
    this.s_break=false;
}

/////////////////////////////        For
private sentencia_for(){
           //this.s_continue=true;
    //this.s_break=true;
    this.parea("P_for");
    this.parea("P_apertura");
    this.declaracionFor();
    this.parea("Punto_coma");
    this.list_condicional();
    this.parea("Punto_coma");
    this.parea("variable");
    this.DecrementoIncremento();
    this.parea("P_cierre");
    this.ListaIns_entreLLaves();
           //this.s_continue=false;
    //this.s_break=false;
}
private DecrementoIncremento(){
    if(this.puntual_Token.getTipo()=="Incremento"){
        this.parea("Incremento");
    }else{
        this.parea("Decremento");
    }
}
private declaracionFor(){
    if(this.puntual_Token.getTipo()=="variable"){
        this.parea("variable");
        this.parea("Igual");
        this.expresion();
    }else{
              this.parea("tipo");
        this.parea("variable");
        this.parea("Igual");
        this.expresion();
    }
}



private list_condicional(){
    this.expresion();
    this.list_condicionalP();
     
}
private list_condicionalP(){
 //   this.ignoraComentarios();

if(this.puntual_Token.getTipo()=="Comparacion"){
this.parea("Comparacion");
this.expresion();
this.list_condicionalP();
    }else{}

}

 























private Default(){
    if(this.puntual_Token.getTipo()=="P_default"){
        this.parea("P_default");
        this.parea("Dos_puntos");
        this.Lista_inst();
        this.parea("P_break");
        this.parea("Punto_coma");

    }else{
        
    }
}





private SentenciaSwitch_case(){
    this.el_switch=true;
    this.parea("P_switch");
    this.parea("P_apertura");
    this.parea("variable");
    this.parea("P_cierre");
    this.parea("Llave_apertura");
    this.ListaCases();
    this.Default();
    this.parea("Llave_cierre");
    this.el_switch =false;
}

private ListaCases(){
    
        this.parea("P_case");
        this.ListaCasesPrim();

    }

private ListaCasesPrim(){
    if(this.puntual_Token.getTipo()=="P_case"){
        this.caseP();
        //this.parea("P_case");
        this.ListaCasesPrim();

    }else{}
}

private OpcionBreak(){
    if(this.puntual_Token.getTipo()=="P_break"){
        this.parea("P_break");
        this.parea("Punto_coma");
    }else{}
}


private caseP(){
    this.parea("P_case");
    this.OpcionCase();
    this.parea("Dos_puntos");
     
    this.Lista_inst();
    this.parea("P_break");
    this.parea("Punto_coma");
}

private OpcionCase(){
    if(this.puntual_Token.getTipo()=="numero"){
     this.parea("numero");
    }else if(this.puntual_Token.getTipo()=="Cadena"){
        this.parea("Cadena");
    }else if(this.puntual_Token.getTipo()=="double"){
        this.parea("Cadena");
    }else if(this.puntual_Token.getTipo()=="Char"){
    this.parea("Char");
    }else if(this.puntual_Token.getTipo()=="variable"){
        this.parea("variable");
        }
}



private expresion(){
    this.E();
    this.simboloComparacionOpcional();
}


private simboloComparacionOpcional(){
if(this.puntual_Token.getTipo()=="Comparacion"){
    this.parea("Comparacion");
    this.E();
}else if(this.puntual_Token.getTipo()=="Mayor"){
    this.parea("Mayor");
    this.E();
}else if(this.puntual_Token.getTipo()=="Menor"){
    this.parea("Menor");
    this.E();
}else{}
}

private E(){
this.T();
this.Eprim();
}

private Eprim(){
if(this.puntual_Token.getTipo()=="Suma"){
    this.parea("Suma");
    this.T();
    this.Eprim();
}else if(this.puntual_Token.getTipo()=="Resta"){
    this.parea("Resta");
    this.T();
    this.Eprim();
}else{}
}

private T(){
this.F();
this.Tprim();

}
private Tprim(){
    if(this.puntual_Token.getTipo()=="Multiplicacion"){
        this.parea("Multiplicacion");
        this.F();
        this.Tprim();
    }else if(this.puntual_Token.getTipo()=="Division"){
        this.parea("Division");
        this.F();
        this.Tprim();
    }else{}

}


private F():void{
    if(this.puntual_Token.getTipo()=="Cadena"){
        this.parea("Cadena");
    }else if(this.puntual_Token.getTipo()=="variable"){
        this.parea("variable");// ID
        this.ExpresionMetodo();
    }else if(this.puntual_Token.getTipo()=="double"){
        this.parea("double");// ID
        this.ExpresionMetodo();
    }else if(this.puntual_Token.getTipo()=="P_apertura"){
        this.parea("P_apertura");
        this.expresion();
        this.parea("P_cierre");
    }else if(this.puntual_Token.getTipo()=="false"){
        this.parea("false");
    }else if(this.puntual_Token.getTipo()=="true"){
        this.parea("true");
    }else if(this.puntual_Token.getTipo()=="numero"){
        this.parea("numero");
    }else if(this.puntual_Token.getTipo()=="Char"){
        this.parea("Char");
    }else{this.expresion();}
}
private ExpresionMetodo(){
    if(this.puntual_Token.getTipo()=="P_apertura"){
    this.parea("P_apertura");
    this.sentencia_llama_metodo();
}else{}
}

private sentencia_llama_metodo(){
    if(this.puntual_Token.getTipo()=="P_cierre"){
     
        this.parea("P_cierre");

    }else{   
        this.ListaExpresiones(); this.parea("P_cierre");
    }
}


private ingoraComentarios():void{
    while(this.puntual_Token.getTipo()=="Comentario"){
        this.sig++;
        this.puntual_Token=this.listaTokens[this.sig];
    }
}





    private parea(tip : string):void{
    // LLAMAR A IGNORA COMENTARIOS 
    //this.ignoraComentarios();
    if(this.puntual_Token.getTipo() != tip){
    if(this.hay_error == false){
       // this.lista_errores_sin.push(new ErroresSintacticos(this.puntual_Token.getFila() , this.puntual_Token.getColumna() ,this.getTipoParaError(tip), this.puntual_Token.getTipo_str() ));
        console.log("se activo un error en la fila " + this.puntual_Token.getFila() + "SE ESPERABA " + tip + " en lugar de "+ this.puntual_Token.getTipo() );
        this.hay_error = true;
    }
    }            
    if((this.hay_error == true && this.puntual_Token.getTipo() == "Punto_coma" && tip == "Punto_coma") || (this.hay_error == true && this.puntual_Token.getTipo() == "Llave_cierre" && tip == "Llave_cierre") ){// truncamiento de fin de 
       this.hay_error = false;
       console.log("COMIENZA A ANALIZAR NORMAL a partir de la fila :  " + this.puntual_Token.getFila());
    }
 
    if (this.puntual_Token.getTipo() != "Ultimo") // AGREGAR EL SHARP 
    {  

       
         
        if(this.hay_error){
            // CUANDO DEJO DE CAMBIAR DE TOKENS , debo desechar hasta llegar a punto y coma o llave de cierre
            if(this.puntual_Token.getTipo() != "Punto_coma" && this.puntual_Token.getTipo() != "Llave_cierre" ){
            this.sig++;
            this.puntual_Token = this.listaTokens[this.sig];
            }   
          
        }else{
            this.sig++;
            this.puntual_Token = this.listaTokens[this.sig];
        }
    
    }
}









}


