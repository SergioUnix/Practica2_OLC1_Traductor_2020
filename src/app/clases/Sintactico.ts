import {token}from 'src/app/clases/token';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { TranslationWidth } from '@angular/common';




export class Sintactico{

public contadorTab:number;
public cadena_traducida:string;
public acept_r_met; public acep_r_fun; // aca son return en metodo y en funcion
public el_switch; public s_continue;public s_break;
   



iterador:number;


public puntual_Token:token; 
public listaTokens:any = [];
public Errores: token[]=[];  ///aca Guardo mis errores 
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

    //this.ignorarComent();
    this.inicio();
    console.log("Termina el Analisis Sintactico");
    

   this.acept_r_met=false;
   this.acep_r_fun=false;
 
    }



public getCadena_traducida():string{
        return this.cadena_traducida;
}
     

public  getErrores() :any
{
    return this.Errores;
}





    private inicio(){   
       // this.parea("P_void"); 
        //this.parea("P_apertura");
        //this.parea("P_cierre")
        //this.parea("Llave_apertura");  
        //this.Lista_inst(); 
        //this.parea("Llave_cierre"); 
        //this.parea("Ultimo");  //aceptacion
        if(this.puntual_Token.getTipo()=="P_class"){
            this.sentencia_clase(); this.lista_claseP(); this.parea("Ultimo");  
        }else{  this.ListDeclar_metodoFun();      this.parea("Ultimo");   }
          
    }    
    
    private lista_claseP(){
        if(this.puntual_Token.getTipo()=="P_class"){
            this.sentencia_clase();
            this.lista_claseP(); ///Realiza la recursion
        }else{  }   
        }

    private sentencia_clase(){       
    if(this.puntual_Token.getTipo()=="P_class")this.cadena_traducida=this.cadena_traducida+"class ";
        this.parea("P_class");   
    if(this.puntual_Token.getTipo()=="variable")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";
        this.parea("variable"); 
    if(this.puntual_Token.getTipo()=="Llave_apertura")this.cadena_traducida=this.cadena_traducida+": "+"\n ";
        this.parea("Llave_apertura"); 

        
     //this.Lista_inst();  //la otra prueba que realice
     this.ListDeclar_metodoFun();
     this.parea("Llave_cierre");    
     
    }







private ListDeclar_metodoFun(){   
    if(this.puntual_Token.getTipo() == "P_int"&&this.listaTokens[this.sig+2].getTipo()=="P_apertura" ||
     this.puntual_Token.getTipo() == "P_double"  &&this.listaTokens[this.sig+2].getTipo()=="P_apertura" ||
      this.puntual_Token.getTipo() == "P_char" &&this.listaTokens[this.sig+2].getTipo()=="P_apertura"||
       this.puntual_Token.getTipo() == "P_string" &&this.listaTokens[this.sig+2].getTipo()=="P_apertura" ||
        this.puntual_Token.getTipo() == "P_bool"&&this.listaTokens[this.sig+2].getTipo()=="P_apertura"){
    
    this.Metodo();
    this.ListDeclar_metodoFunP();
    }else{  this.Lista_inst(); 
        this.ListDeclar_metodoFunP(); }
 
      

   
      if (this.puntual_Token.getTipo()=="P_void"){
          this.Declaracion();
           this.ListDeclar_metodoFunP();
      }else{}
}
private ListDeclar_metodoFunP(){
  
    if (this.puntual_Token.getTipo()=="P_void"){
        this.Declaracion();
        this.ListDeclar_metodoFunP();
    }else if(this.puntual_Token.getTipo() == "P_int"&&this.listaTokens[this.sig+2].getTipo()=="P_apertura" ||
     this.puntual_Token.getTipo() == "P_double"  &&this.listaTokens[this.sig+2].getTipo()=="P_apertura" ||
      this.puntual_Token.getTipo() == "P_char" &&this.listaTokens[this.sig+2].getTipo()=="P_apertura"||
       this.puntual_Token.getTipo() == "P_string" &&this.listaTokens[this.sig+2].getTipo()=="P_apertura" ||
        this.puntual_Token.getTipo() == "P_bool"&&this.listaTokens[this.sig+2].getTipo()=="P_apertura"){
    
    this.Metodo();
    this.ListDeclar_metodoFunP();
    }else{ 
    }


}
/////////////////////////////Metodos
private Metodo(){
    if(this.puntual_Token.getTipo() == "P_int" || this.puntual_Token.getTipo() == "P_double"  
    || this.puntual_Token.getTipo() == "P_char" || this.puntual_Token.getTipo() == "P_string"  || this.puntual_Token.getTipo() == "P_bool"){
    this.Tipo(); 
    if(this.puntual_Token.getTipo()=="variable")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+""; 
    this.parea("variable");  
    this.MetodoPrim(); }else{

    }
    //this.Lista_inst();
}

private MetodoPrim(){
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("P_apertura");
    this.Tipo();
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("variable");
    this.Ids();
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("P_cierre");
    this.dentro_meto();

}
private dentro_meto(){
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("Llave_apertura");
    this.Lista_inst();
  this.sentencia_return_funciones();  
  this.cadena_traducida+this.puntual_Token.getValor()+" ";
this.parea("Llave_cierre");

}
private Ids(){
    if (this.puntual_Token.getTipo() == "Coma"){
    if(this.puntual_Token.getTipo()=="Coma")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" "; 
    this.parea("Coma");
    this.Tipo();
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("variable");
    this.Ids();
    }else{}
}

////////////////////////////////////////////////////





private Declar_dentro_metodoFun(){
    this.Tipo(); 
    if(this.puntual_Token.getTipo()=="variable")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+""; 
    this.parea("variable");  
    this.DeclaracionP_metodos();
}

private DeclaracionP_metodos(){
    this.Lista_ids();
    this.asignacion();
    if(this.puntual_Token.getTipo()=="Punto_coma")this.cadena_traducida=this.cadena_traducida+"\n"; 
    this.parea("Punto_coma");
}


private Tipo(){
//this.ingoraComentarios();
if (this.puntual_Token.getTipo() == "P_int") {     
this.cadena_traducida=this.cadena_traducida+"var "+"";          
    this.parea("P_int");
}else if (this.puntual_Token.getTipo() == "P_double"){
    this.cadena_traducida=this.cadena_traducida+"var "+"";     
    this.parea("P_double"); 
}else if (this.puntual_Token.getTipo() == "P_char"){
    this.cadena_traducida=this.cadena_traducida+"var "+"";     
    this.parea("P_char");
}else if (this.puntual_Token.getTipo() == "P_string"){
    this.cadena_traducida=this.cadena_traducida+"var "+"";     
    this.parea("P_string");
}else {  this.cadena_traducida=this.cadena_traducida+"var "+"";       this.parea("P_bool");  }

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
        else if (this.puntual_Token.getTipo() == "P_int" &&this.listaTokens[this.sig+2].getTipo()!="P_apertura"|| 
        this.puntual_Token.getTipo() == "P_double"  &&this.listaTokens[this.sig+2].getTipo()!="P_apertura"||
         this.puntual_Token.getTipo() == "P_char" &&this.listaTokens[this.sig+2].getTipo()!="P_apertura"||
          this.puntual_Token.getTipo() == "P_string" &&this.listaTokens[this.sig+2].getTipo()!="P_apertura" || 
          this.puntual_Token.getTipo() == "P_bool"&&this.listaTokens[this.sig+2].getTipo()!="P_apertura"
        )  //variables char, bool, string, int, 
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
    // this.ignorarComent(); 
     
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
    else if (this.puntual_Token.getTipo() == "P_int" &&this.listaTokens[this.sig+2].getTipo()!="P_apertura"||
     this.puntual_Token.getTipo() == "P_double"  &&this.listaTokens[this.sig+2].getTipo()!="P_apertura" ||
      this.puntual_Token.getTipo() == "P_char" &&this.listaTokens[this.sig+2].getTipo()!="P_apertura"||
       this.puntual_Token.getTipo() == "P_string" &&this.listaTokens[this.sig+2].getTipo()!="P_apertura" ||
        this.puntual_Token.getTipo() == "P_bool"&&this.listaTokens[this.sig+2].getTipo()!="P_apertura"
    )  //variables char, bool, string, int, 
    {
        //this.Declaracion(); ///la prueba que realice antes
        this.Declar_dentro_metodoFun();
    }
    else if (this.puntual_Token.getTipo() == "variable")
    {      
      //  this.cadena_traducida+this.puntual_Token.getValor()+" ";
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
    if(this.puntual_Token.getTipo()=="P_return")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("P_return");
    if(this.puntual_Token.getTipo()!="Punto_coma"){
    this.expresion();
    this.parea("Punto_coma");}else{this.parea("Punto_coma");}
}

private sentencia_return_metodos(){    
    if(this.puntual_Token.getTipo()=="P_return")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"\n";
    this.parea("P_return");
    this.parea("Punto_coma");
}
private sentencia_continue(){
    if(this.puntual_Token.getTipo()=="P_continue")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"\n";
this.parea("P_continue");
this.parea("Punto_coma");
}

    private sentencia_break(){
        if(this.puntual_Token.getTipo()=="P_break")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"\n";
        this.parea("P_break");
        this.parea("Punto_coma");
    }
private ListaIns_entreLLaves(){
    if(this.puntual_Token.getTipo()=="Llave_apertura")this.cadena_traducida=this.cadena_traducida+": "+"\n ";
    this.parea("Llave_apertura");
    this.Lista_inst();
    this.parea("Llave_cierre");
}


    private SentenciaImprime():void{
        this.parea("P_console");
        this.parea("Punto");
        if(this.puntual_Token.getTipo()=="P_write")this.cadena_traducida=this.cadena_traducida+"print"+"";
        this.parea("P_write");        
        if(this.puntual_Token.getTipo()=="P_apertura")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("P_apertura");
        this.expresion();        
        if(this.puntual_Token.getTipo()=="P_cierre")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("P_cierre");
        if(this.puntual_Token.getTipo()=="Punto_coma")this.cadena_traducida=this.cadena_traducida+"\n"+"";        
        this.parea("Punto_coma");
    }


private opcionMetodoFuncion(){
    if (this.puntual_Token.getTipo() == "P_cierre"){
       this.parea("P_cierre");
   this.ListaIns_entreLLaves();
   this.acept_r_met=false;
   this.acep_r_fun=false;
    }else{ 
        this.Tipo();
        this.cadena_traducida+this.puntual_Token.getValor()+" ";
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
            this.cadena_traducida+this.puntual_Token.getValor()+" ";
            this.parea("Coma");
            this.Tipo();
            this.cadena_traducida+this.puntual_Token.getValor()+" ";
            this.parea("variable");
            this.lista_parametros();
        }else{ }
    }

private Declaracion(){
   if (this.puntual_Token.getTipo() == "P_void"){
     if(this.puntual_Token.getTipo()=="P_void")this.cadena_traducida=this.cadena_traducida+"def "+"";
     this.parea("P_void");
     if(this.puntual_Token.getTipo()=="variable")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
     this.parea("variable");
     if(this.puntual_Token.getTipo()=="P_apertura")this.cadena_traducida=this.cadena_traducida+": "+"\n";
     this.parea("P_apertura");
     this.opcionMetodoFuncion();

     
        }else{
this.Tipo();
this.cadena_traducida+this.puntual_Token.getValor()+" ";
this.parea("variable");
this.DeclaracionPrim();
}
    }



private DeclaracionPrim(){
     if (this.puntual_Token.getTipo() == "P_apertura"){
        this.cadena_traducida+this.puntual_Token.getValor()+" ";
     this.parea("P_apertura");
     this.acep_r_fun=true;
     this.opcionMetodoFuncion();
     }else{ 
         this.Lista_ids();
         this.asignacion();
         this.cadena_traducida+this.puntual_Token.getValor()+" ";
         this.parea("Punto_coma");
        }
    }


private Lista_ids(){
    if (this.puntual_Token.getTipo() == "Coma"){
    if(this.puntual_Token.getTipo()=="Coma")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" "; 
    this.parea("Coma");
    if(this.puntual_Token.getTipo()=="variable")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+""; 
    this.parea("variable");
    this.Lista_ids();
    }else{}
}
    
private asignacion(){
    if (this.puntual_Token.getTipo() == "Igual"){
        if(this.puntual_Token.getTipo()=="Igual")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" "; 
        this.parea("Igual");
        this.expresion();
    }else{}
    

}

private asignacionSimple(){
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("variable");
    this.OpcionAsignacion();
}

private OpcionAsignacion(){
    if (this.puntual_Token.getTipo() == "Igual"){
if(this.puntual_Token.getTipo()=="Igual")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";
this.parea("Igual");
this.expresion();
if(this.puntual_Token.getTipo()=="Punto_coma")this.cadena_traducida=this.cadena_traducida+"\n ";
this.parea("Punto_coma");
    }else{
        if(this.puntual_Token.getTipo()=="P_apertura")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";
        this.parea("P_apertura");
        this.sentencia_llama_metodo();
        if(this.puntual_Token.getTipo()=="Punto_coma")this.cadena_traducida=this.cadena_traducida+"\n ";
        this.parea("Punto_coma");

    }
}


//////////////////////////  Do while
private Sentencia_do_while(){
    this.s_continue=true;
    this.s_break=true;
    if(this.puntual_Token.getTipo()=="P_do")this.cadena_traducida=this.cadena_traducida+"while True"+"";
     this.parea("P_do");
     this.ListaIns_entreLLaves();     
     if(this.puntual_Token.getTipo()=="P_while")this.cadena_traducida=this.cadena_traducida+"if"+"";
     this.parea("P_while");
     if(this.puntual_Token.getTipo()=="P_apertura")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
     this.parea("P_apertura");
     this.list_condicional();     
     if(this.puntual_Token.getTipo()=="P_cierre")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
     this.parea("P_cierre");     
     if(this.puntual_Token.getTipo()=="Punto_coma")this.cadena_traducida=this.cadena_traducida+": \n  break"+"";
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
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("Coma");
    this.expresion();
    this.Lista_expresionP();
    }else{}
}

      

/////////////////////////                If
    private sentencia_if(){
        if(this.puntual_Token.getTipo()=="P_if")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";
        this.parea("P_if");
        this.parea("P_apertura");
        this.list_condicional();
        this.parea("P_cierre");
        this.ListaIns_entreLLaves();
        this.elsePrim();       
    }
    private elsePrim(){
        if(this.puntual_Token.getTipo()=="P_else" && this.listaTokens[this.sig+1].getTipo()=="P_if"){
        this.cadena_traducida=this.cadena_traducida+"elif ";    
        this.parea("P_else");
        this.sig++;
        this.puntual_Token = this.listaTokens[this.sig];
        this.multiplesIf();
        this.elsePrim();
    
    }else if (this.puntual_Token.getTipo()=="P_else"){
            this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";    
            this.parea("P_else");
            this.multiplesIf();
           // this.elsePrim();


        }else{}
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
    if(this.puntual_Token.getTipo()=="P_while")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("P_while");
    this.parea("P_apertura");
    this.list_condicional();    
    if(this.puntual_Token.getTipo()=="P_cierre")this.cadena_traducida=this.cadena_traducida+": "+"\n";
    this.parea("P_cierre");
    this.ListaIns_entreLLaves();
    this.s_continue=false;
    this.s_break=false;
}

/////////////////////////////        For
private sentencia_for(){
    this.s_continue=true;
    this.s_break=true;    
    if(this.puntual_Token.getTipo()=="P_for")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"  ";
    this.parea("P_for");
    this.parea("P_apertura");
    this.cadena_traducida=this.cadena_traducida+this.listaTokens[this.sig+1]+" in range (";
    this.declaracionFor();
    this.cadena_traducida=this.cadena_traducida+this.listaTokens[this.sig-1]+", ";
    this.parea("Punto_coma");
    this.list_condicional();
    this.cadena_traducida=this.cadena_traducida+this.listaTokens[this.sig-1]+")";
    this.parea("Punto_coma");
    this.cadena_traducida+this.puntual_Token.getValor()+" ";
    this.parea("variable");
    this.DecrementoIncremento();
    this.parea("P_cierre");
    this.ListaIns_entreLLaves();
    this.s_continue=false;
    this.s_break=false;
}
private DecrementoIncremento(){
    if(this.puntual_Token.getTipo()=="Incremento"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Incremento");
    }else{
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Decremento");
    }
}
private declaracionFor(){
    if(this.puntual_Token.getTipo()=="variable"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("variable");
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Igual");
        this.expresion();
    }else{
        this.Tipo();
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("variable");        
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Igual");
        this.expresion();
    }
}



private list_condicional(){
    this.expresion();
    this.list_condicionalP();
     
}
private list_condicionalP(){
 //   this.ignorarComent();

if(this.puntual_Token.getTipo()=="Comparacion"){
if(this.puntual_Token.getTipo()=="Comparacion")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";    
this.parea("Comparacion");
this.expresion();
this.list_condicionalP();
    }else{}

}

 























private Default(){
    if(this.puntual_Token.getTipo()=="P_default"){
        this.cadena_traducida=this.cadena_traducida+"print switcher.get("+"";  
        this.parea("P_default");
        this.parea("Dos_puntos");
        this.Lista_inst();
        this.parea("P_break");
        this.cadena_traducida=this.cadena_traducida+")"+"\n";  
        this.parea("Punto_coma");

    }else{
        
    }
}





private SentenciaSwitch_case(){
    this.el_switch=true;
    if(this.puntual_Token.getTipo()=="P_switch")this.cadena_traducida=this.cadena_traducida+"def switch"+"";   
    this.parea("P_switch");
    if(this.puntual_Token.getTipo()=="P_apertura")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("P_apertura");
    if(this.puntual_Token.getTipo()=="P_variable")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("variable");
    if(this.puntual_Token.getTipo()=="P_cierre")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("P_cierre");
    if(this.puntual_Token.getTipo()=="Llave_apertura")this.cadena_traducida=this.cadena_traducida+": \n switcher={ \n"+"";
    this.parea("Llave_apertura");
    this.ListaCases();
    if(this.puntual_Token.getTipo()=="P_default"){
    this.Default();}else{this.cadena_traducida=this.cadena_traducida+"}"+"\n";}
    this.parea("Llave_cierre");
    this.el_switch =false;
}

private ListaCases(){
    
       // this.parea("P_case");
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
    if(this.puntual_Token.getTipo()=="Dos_puntos")this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+" ";  
    this.parea("Dos_puntos");
     
    this.Lista_inst();
    if(this.puntual_Token.getTipo()=="P_break")this.cadena_traducida=this.cadena_traducida+", "+"\n";  
    this.parea("P_break");
    this.parea("Punto_coma");
}

private OpcionCase(){
    if(this.puntual_Token.getTipo()=="numero"){
     this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";  
     this.parea("numero");
    }else if(this.puntual_Token.getTipo()=="Cadena"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";  
        this.parea("Cadena");
    }else if(this.puntual_Token.getTipo()=="double"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";  
        this.parea("Cadena");
    }else if(this.puntual_Token.getTipo()=="Char"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";  
    this.parea("Char");
    }else if(this.puntual_Token.getTipo()=="variable"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";  
        this.parea("variable");
        }
}



private expresion(){
    this.E();
    this.simboloComparacionOpcional();
}


private simboloComparacionOpcional(){
if(this.puntual_Token.getTipo()=="Comparacion"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("Comparacion");
    this.E();
}else if(this.puntual_Token.getTipo()=="Mayor"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("Mayor");
    this.E();
}else if(this.puntual_Token.getTipo()=="Menor"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("Menor");
    this.E();
}else if(this.puntual_Token.getTipo()=="Logico"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("Logico");
    this.E();
}else{}
}

private E(){
this.T();
this.Eprim();
}

private Eprim(){
if(this.puntual_Token.getTipo()=="Suma"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("Suma");
    this.T();
    this.Eprim();
}else if(this.puntual_Token.getTipo()=="Resta"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
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
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Multiplicacion");
        this.F();
        this.Tprim();
    }else if(this.puntual_Token.getTipo()=="Division"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Division");
        this.F();
        this.Tprim();
    }else{}

}


private F():void{
    if(this.puntual_Token.getTipo()=="Cadena"){
    this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+""; 
        this.parea("Cadena");
    }else if(this.puntual_Token.getTipo()=="variable"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("variable");// ID
        this.ExpresionMetodo();
    }else if(this.puntual_Token.getTipo()=="Html"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Html");// ID
      
    }else if(this.puntual_Token.getTipo()=="double"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("double");// ID
        this.ExpresionMetodo();
    }else if(this.puntual_Token.getTipo()=="P_apertura"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("P_apertura");
        this.expresion();
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("P_cierre");
    }else if(this.puntual_Token.getTipo()=="false"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("false");
    }else if(this.puntual_Token.getTipo()=="true"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("true");
    }else if(this.puntual_Token.getTipo()=="numero"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("numero");
    }else if(this.puntual_Token.getTipo()=="Char"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
        this.parea("Char");
    }else{this.expresion();}
}
private ExpresionMetodo(){
    if(this.puntual_Token.getTipo()=="P_apertura"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
    this.parea("P_apertura");
    this.sentencia_llama_metodo();
}else{}
}

private sentencia_llama_metodo(){
    if(this.puntual_Token.getTipo()=="P_cierre"){
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
     
        this.parea("P_cierre");

    }else{   
        this.cadena_traducida=this.cadena_traducida+this.puntual_Token.getValor()+"";
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
    //this.ignorarComent();
    if(this.puntual_Token.getTipo() != tip){
    if(this.hay_error == false){
        let nuevo=new token(); // Creo un token  para meterlo en los errores
        nuevo.setValor("  SE ESPERABA " + tip + " en lugar de "+ this.puntual_Token.getTipo() );   /// En el valor metemos la descripcion del error
        nuevo.setColumna(this.puntual_Token.getColumna()); nuevo.setFila(this.puntual_Token.getFila());
        nuevo.setTipo("Error Sintactico");  this.Errores.push(nuevo); 
        
        console.log("se activo un error en la fila " + this.puntual_Token.getFila() + "  SE ESPERABA " + tip + " en lugar de "+ this.puntual_Token.getTipo() );
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


