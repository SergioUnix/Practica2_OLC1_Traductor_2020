import {token}from 'src/app/clases/token';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';




export class Sintactico{
public NO_salto:boolean;
public contadorTab:number;
public Traducir:boolean;
public cadena_traducida:string;
public tomarLLaves:boolean;

public acepta_return_metodos;
public acepta_return_fuciones; 
    
public getCadena_traducida():string{
   return this.cadena_traducida;
}



iterador:number;

// atributos publicos PARA PARSEAR 
public tokenActual:token; 
public listaTok:any = [];
public sig :number;
public hay_error:boolean; 


constructor(tokens:any[]){

    this.NO_salto=false;
    this.contadorTab=0;
    this.Traducir=false;
    this.cadena_traducida="";
    this.tomarLLaves=false;
    
    this.hay_error=false;
    this.listaTok = tokens;
    this.sig = 0 ; 
    this.tokenActual = this.listaTok[this.sig];
    // LISTO PARA INICIAR EL SINTACTICO 
    console.log("INICIA A ANALIZAR");

    //this.ignoraComentarios();
    this.inicio();
    console.log("TERMINO DE ANALIZAR");
    

    this.acepta_return_metodos=false;
   this.acepta_return_fuciones=false;
 
    }

    private inicio(){   
        this.parea("P_void"); 
        this.parea("P_apertura");
        this.parea("P_cierre")
        this.parea("Llave_apertura");  
        this.Lista_inst(); 
        this.parea("Llave_cierre"); 
        this.parea("Ultimo");  //aceptacion
       // this.sentencia_clase(); this.lista_claseP(); this.parea("Ultimo");    
    }    //metodo Inicio
    
    private lista_claseP(){
        if(this.tokenActual.getTipo()=="P_class"){
            this.sentencia_clase();
            this.lista_claseP(); ///Recursivo
        }else{  }   
        }

    private sentencia_clase(){       
        this.parea("P_class");   this.parea("variable");  this.parea("Llave_apertura");   this.Lista_inst();   this.parea("Llave_cierre");    
    }
///////////////////////////////////////////////////////////////////
    private Lista_inst(){
        this.Instruccion();    this.Lista_instPrim();
    }

  ////////////////////////////////////////////////////  
    private Lista_instPrim(){
        if (this.tokenActual.getTipo() == "P_if")
        {             // Instruccion -> Sentencia_if 
            this.Instruccion();
            this.Lista_instPrim();           
        }
        else if (this.tokenActual.getTipo() == "P_console")
        {             // Instruccion -> sentencia_while
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "variable")
        {             // Instruccion -> sentencia_for
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "tipo")
        {             // Instruccion -> sentenciaImprime 
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "P_while")
        {             // Instruccion -> switch
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "P_do")  //variables char, bool, string, int, 
        {
            this.Instruccion();
            this.Lista_instPrim();
    
        }
        else if (this.tokenActual.getTipo() == "P_for")
        {             // Instruccion -> asignacionSimple 
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "P_switch")
        {             // Instruccion -> asignacionSimple 
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "P_return"&& this.acepta_return_metodos==true)
        {             // Instruccion -> asignacionSimple 
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "P_return"&& this.acepta_return_fuciones==true)
        {             // Instruccion -> asignacionSimple 
            this.Instruccion();
            this.Lista_instPrim();
        }
        else if (this.tokenActual.getTipo() == "P_continue")
        {             // Instruccion -> asignacionSimple 
            this.Instruccion();
            this.Lista_instPrim();
        }
        
        else {
    
        }

    }



    ////////////////////////////////////////////////////////////

    private Instruccion(){ // TODAS LAS INSTRUCCIONES QUE PUEDO HACER 
    // this.ignoraComentarios(); 
    // TODAS LAS SENTENCIAS QUE PUEDO HACER....  primeros de cada sentencia 
    if (this.tokenActual.getTipo() == "P_if")
    {             // Instruccion -> Sentencia_if 
        this.sentencia_if();
    }
    else if (this.tokenActual.getTipo() == "P_while")
    {             // Instruccion -> sentencia_while
        this.sentencia_while();
    }
    else if (this.tokenActual.getTipo() == "P_for")
    {             // Instruccion -> sentencia_for
        this.sentencia_for();
    }
    else if (this.tokenActual.getTipo() == "P_console")
    {             // Instruccion -> sentenciaImprime 
        this.SentenciaImprime();
    }
    else if (this.tokenActual.getTipo() == "P_case")
    {             // Instruccion -> switch
        this.SentenciaSwitch_case();
    }
    else if (this.tokenActual.getTipo() == "tipo")  //variables char, bool, string, int, 
    {
        this.Declaracion();

    }
    else if (this.tokenActual.getTipo() == "variable")
    {             // Instruccion -> asignacionSimple 
        this.asignacionSimple();
    }
    
    else {

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
    if (this.tokenActual.getTipo() == "P_cierre"){
       this.parea("P_cierre");
   this.ListaIns_entreLLaves();
   this.acepta_return_metodos=false;
   this.acepta_return_fuciones=false;
    }else{ 
        this.parea("tipo");
        this.parea("variable");
        this.lista_parametros();
        this.parea("P_cierre");
        this.ListaIns_entreLLaves();
   this.acepta_return_metodos=false;
   this.acepta_return_fuciones=false;
        
        
  }

}


    private lista_parametros(){
        if (this.tokenActual.getTipo() == "Coma"){
            this.parea("Coma");
            this.parea("tipo");
            this.parea("variable");
            this.lista_parametros();
        }else{ }
    }

private Declaracion(){
   if (this.tokenActual.getTipo() == "P_void"){
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
     if (this.tokenActual.getTipo() == "P_apertura"){
     this.parea("P_apertura");
     //this.acepta_return_funciones=true;
     this.opcionMetodoFuncion();
     }else{
         this.Lista_ids();
         this.asignacion();
         this.parea("Punto_coma");
        }
    }


private Lista_ids(){
    if (this.tokenActual.getTipo() == "Coma"){
    this.parea("Coma");
    this.parea("variable");
    this.Lista_ids();
    }else{}
}
    
private asignacion(){
    if (this.tokenActual.getTipo() == "Igual"){
        this.parea("Igual");
        this.expresion();
    }else{}
    

}

private asignacionSimple(){
    this.parea("variable");
    this.OpcionAsignacion();
}

private OpcionAsignacion(){
    if (this.tokenActual.getTipo() == "Igual"){
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
           //this.acepta_sentencia_continue=true;
    //this.acepta_sentencia_break=true;
     this.parea("P_do");
     this.ListaIns_entreLLaves();
     this.parea("P_while");
     this.parea("P_apertura");
     this.lista_expresiones_condicionales();
     this.parea("P_cierre");
     this.parea("Punto_coma");
     //this.acepta_sentencia_continue=false;
    //this.acepta_sentencia_break=false;
}


/////////////////////////


private ListaExpresiones(){
    this.expresion();
    this.Lista_expresionP();
}
private Lista_expresionP(){
    if(this.tokenActual.getTipo()=="Coma"){
    this.parea("Coma");
    this.expresion();
    this.Lista_expresionP();
    }else{}
}

      

/////////////////////////                If
    private sentencia_if(){
        this.parea("P_if");
        this.parea("P_apertura");
        this.lista_expresiones_condicionales();
        this.parea("P_cierre");
        this.ListaIns_entreLLaves();
        this.elsePrim();       
    }
    private elsePrim(){
        if(this.tokenActual.getTipo()=="P_else"){
        this.parea("P_else");
        this.multiplesIf();}else{}
    }
    private multiplesIf(){
        if(this.tokenActual.getTipo()=="Llave_apertura"){
        this.ListaIns_entreLLaves();
        }else{
        this.sentencia_if();
        }     
        }
 ////////////////////////      while                  
private sentencia_while(){
       //this.acepta_sentencia_continue=true;
    //this.acepta_sentencia_break=true;
    this.parea("P_while");
    this.parea("P_apertura");
    this.lista_expresiones_condicionales();
    this.parea("P_cierre");
    this.ListaIns_entreLLaves();
    //this.acepta_sentencia_continue=false;
    //this.acepta_sentencia_break=false;
}

/////////////////////////////        For
private sentencia_for(){
           //this.acepta_sentencia_continue=true;
    //this.acepta_sentencia_break=true;
    this.parea("P_for");
    this.parea("P_apertura");
    this.declaracionFor();
    this.parea("Punto_coma");
    this.lista_expresiones_condicionales();
    this.parea("Punto_coma");
    this.parea("variable");
    this.DecrementoIncremento();
    this.parea("P_cierre");
    this.ListaIns_entreLLaves();
           //this.acepta_sentencia_continue=false;
    //this.acepta_sentencia_break=false;
}
private DecrementoIncremento(){
    if(this.tokenActual.getTipo()=="Incremento"){
        this.parea("Incremento");
    }else{
        this.parea("Decremento");
    }
}
private declaracionFor(){
    if(this.tokenActual.getTipo()=="variable"){
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



private lista_expresiones_condicionales(){
    this.expresion();
    this.lista_expresiones_condicionalesP();
     
}
private lista_expresiones_condicionalesP(){
 //   this.ignoraComentarios();

if(this.tokenActual.getTipo()=="Comparacion"){
this.parea("Comparacion");
this.expresion();
this.lista_expresiones_condicionalesP();
    }else{}

}

 























private Default(){
    if(this.tokenActual.getTipo()=="P_default"){
        this.parea("P_default");
        this.parea("Dos_puntos");
        this.Lista_inst();
        this.parea("P_break");
        this.parea("Punto_coma");

    }else{
        
    }
}





private SentenciaSwitch_case(){
    //this.esta_en_el_switch=true;
    this.parea("P_switch");
    this.parea("P_apertura");
    this.parea("variable");
    this.parea("P_cierre");
    this.parea("Llave_apertura");
    this.ListaCases();
    this.Default();
    this.parea("Llave_cierre");
    //this.esta_en_el_switch =false;
}

private ListaCases(){
    
        this.parea("P_case");
        this.ListaCasesPrim();

    }

private ListaCasesPrim(){
    if(this.tokenActual.getTipo()=="P_case"){
        this.caseP();
        //this.parea("P_case");
        this.ListaCasesPrim();

    }else{}
}

private OpcionBreak(){
    if(this.tokenActual.getTipo()=="P_break"){
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
    if(this.tokenActual.getTipo()=="numero"){
     this.parea("numero");
    }else if(this.tokenActual.getTipo()=="Cadena"){
        this.parea("Cadena");
    }else if(this.tokenActual.getTipo()=="Char"){
    this.parea("Char");
    }else if(this.tokenActual.getTipo()=="variable"){
        this.parea("variable");
        }
}



private expresion(){
    this.E();
    this.simboloComparacionOpcional();
}


private simboloComparacionOpcional(){
if(this.tokenActual.getTipo()=="Comparacion"){
    this.parea("Comparacion");
    this.E();
}else if(this.tokenActual.getTipo()=="Mayor"){
    this.parea("Mayor");
    this.E();
}else if(this.tokenActual.getTipo()=="Menor"){
    this.parea("Mayor ");
    this.E();
}else{}
}

private E(){
this.T();
this.Eprim();
}

private Eprim(){
if(this.tokenActual.getTipo()=="Suma"){
    this.parea("Suma");
    this.T();
    this.Eprim();
}else if(this.tokenActual.getTipo()=="Resta"){
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
    if(this.tokenActual.getTipo()=="Multiplicacion"){
        this.parea("Multiplicacion");
        this.F();
        this.Tprim();
    }else if(this.tokenActual.getTipo()=="Resta"){
        this.parea("Resta");
        this.F();
        this.Tprim();
    }else{}

}


private F(){
    if(this.tokenActual.getTipo()=="Cadena"){
        this.parea("Cadena");
    }else if(this.tokenActual.getTipo()=="variable"){
        this.parea("variable");// ID
        this.ExpresionMetodo();
    }else if(this.tokenActual.getTipo()=="booleano"){
        this.parea("booleano");
    }else if(this.tokenActual.getTipo()=="numero"){
        this.parea("numero");
    }else if(this.tokenActual.getTipo()=="Char"){
        this.parea("Char");
    }else{this.expresion();}
}
private ExpresionMetodo(){
    if(this.tokenActual.getTipo()=="P_apertura"){
    this.parea("P_apertura");
    this.sentencia_llama_metodo();
}else{}
}

private sentencia_llama_metodo(){
    if(this.tokenActual.getTipo()=="P_cierre"){
     
        this.parea("P_cierre");

    }else{   
        this.ListaExpresiones(); this.parea("P_cierre");
    }
}




    private parea(tip : string):void{
    // LLAMAR A IGNORA COMENTARIOS 
    //this.ignoraComentarios();
    if(this.tokenActual.getTipo() != tip){
    if(this.hay_error == false){
       // this.lista_errores_sin.push(new ErroresSintacticos(this.tokenActual.getFila() , this.tokenActual.getColumna() ,this.getTipoParaError(tip), this.tokenActual.getTipo_str() ));
        console.log("se activo un error en la fila " + this.tokenActual.getFila() + "SE ESPERABA " + tip + " en lugar de "+ this.tokenActual.getTipo() );
        this.hay_error = true;
    }
    }
            
    if((this.hay_error == true && this.tokenActual.getTipo() == "Punto_coma" && tip == "Punto_coma") || (this.hay_error == true && this.tokenActual.getTipo() == "Llave_cierre" && tip == "Llave_cierre") ){// truncamiento de fin de 
       this.hay_error = false;
       console.log("COMIENZA A ANALIZAR NORMAL a partir de la fila :  " + this.tokenActual.getFila());
    }
 
    if (this.tokenActual.getTipo() != "Ultimo") // AGREGAR EL SHARP 
    {  

       
         
        if(this.hay_error){
            // CUANDO DEJO DE CAMBIAR DE TOKENS , debo desechar hasta llegar a punto y coma o llave de cierre
            if(this.tokenActual.getTipo() != "Punto_coma" && this.tokenActual.getTipo() != "Llave_cierre" ){
            this.sig++;
            this.tokenActual = this.listaTok[this.sig];
            }   
          
        }else{
            this.sig++;
            this.tokenActual = this.listaTok[this.sig];
        }
    
    }
}









}


