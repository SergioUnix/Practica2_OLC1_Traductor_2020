import { Component, OnInit, HostBinding } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista games
import * as saveAs from 'file-saver';

import {token}from 'src/app/clases/token';
import {Sintactico}from 'src/app/clases/Sintactico';
import {HTML_traduce}from 'src/app/clases/HTML_Traduce';
import { NullTemplateVisitor } from '@angular/compiler';

//declare function isNaN(number: number): boolean;
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})




export class PaginaComponent implements OnInit {

//  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 


public titulo:string;
public year: number;
asignaciones: any=[];
users =['ryan','Jose','Ariel']; //es un arreglo
public isErrorGuardar=false;
public titulo2 ="hola mundo";

public codigo;
public codigo1;
public codigo2;
public codigo3;
public consola;
public python;
public html="";
public Json="";


file:any;
file2:any;
file3:any;



  constructor() {


  //this.titulo="Hola mundo, soy un componente ";
  //this.comentario = "Este es mi primer componenete ";
  //this.year = 2020;
  //console.log("Componente Cargado ....");
  //console.log(this.titulo, this.comentario, this.year);


   }

  ngOnInit(): void {

  }


////////////////////////Carga el archivo
  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument()
  }
  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
     // console.log(fileReader.result);
      this.codigo1 = fileReader.result;  ////// Aca mando a una variable para ponerlo en la descripccion
      console.log(this.file.name);          ////// nombre del archivo abierto
   }
    
    fileReader.readAsText(this.file);
}
////////////////////////Carga el archivo
fileChanged2(e) {
  this.file2 = e.target.files[0];
  this.uploadDocument2()
}
uploadDocument2() {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
   // console.log(fileReader.result);
    this.codigo2 = fileReader.result;  ////// Aca mando a una variable para ponerlo en la descripccion
    console.log(this.file2.name);          ////// nombre del archivo abierto
 }
  
  fileReader.readAsText(this.file2);
}
////////////////////////Carga el archivo
fileChanged3(e) {
  this.file3 = e.target.files[0];
  this.uploadDocument3()
}
uploadDocument3() {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
   // console.log(fileReader.result);
    this.codigo3 = fileReader.result;  ////// Aca mando a una variable para ponerlo en la descripccion
    console.log(this.file3.name);          ////// nombre del archivo abierto
 }
  
  fileReader.readAsText(this.file3);
}

//////////Guarda el archivo 
Guardar(parametro) {
  this.codigo=parametro;
  let file = new Blob([this.codigo], { type: 'text/csv;charset=utf-8' });
  saveAs(file, 'Archivo.txt')
}

GuardarComo(){
}

SaveDemo() {
  let file = new Blob(["hello world"], { type: "text/csv;charset=utf-8" });
  saveAs(file, "helloworld.csv")
  }

  
public concatenar="";
public concatenar2="";
public comodin="";
columna:number=1;
fila:number =1;

tokens:token[]=[];  ///arreglo de tokens
errores_sintacticos: token[]=[];
errores_lexicos: token[]=[];
htmls:token[]=[];
comentarios:token[]=[];



public iterador:number = 0;
public id:number=0;

analizador(parametro){
this.codigo=parametro;


while (this.iterador < this.codigo.length) {


////  Incremento
if (this.codigo[this.iterador] == '+'&& this.codigo[this.iterador+1]=='+')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Incremento");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
////  Decremento
if (this.codigo[this.iterador] == '-'&& this.codigo[this.iterador+1]=='-')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Decremento");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}

////  Or
if (this.codigo[this.iterador] == '|'&& this.codigo[this.iterador+1]=='|')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Logico");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
if (this.codigo[this.iterador] == '&'&& this.codigo[this.iterador+1]=='&')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Logico");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
if (this.codigo[this.iterador] == '!'&& this.codigo[this.iterador+1]=='=')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Comparacion");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
////  Igualdad
if (this.codigo[this.iterador] == '='&& this.codigo[this.iterador+1]=='=')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Comparacion");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
////  Igualdad
if (this.codigo[this.iterador] == '>'&& this.codigo[this.iterador+1]=='=')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Comparacion");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
////  Igualdad
if (this.codigo[this.iterador] == '>'&& this.codigo[this.iterador+1]=='=')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Comparacion");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}
////  Igualdad
if (this.codigo[this.iterador] == '<'&& this.codigo[this.iterador+1]=='=')  // si detecto comillas simples
{     
this.concatenar=this.concatenar +this.codigo[this.iterador]; 
this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Comparacion");  this.tokens.push(nuevo); 
this.concatenar="";    this.iterador++; this.iterador++;                      
}

///////Para las Cadenas
if (this.codigo[this.iterador] == '\"')  // si detecto comillas dobles
{     this.iterador++;
  for (var _j = 0; _j < this.codigo.length; _j++)
{ 
  if (this.codigo[this.iterador] == '\n') { this.columna = 1; this.fila++; }    
  if (this.codigo[this.iterador] == '\"')
  { break; }
  this.concatenar = this.concatenar + this.codigo[this.iterador];
  
                     
  this.iterador++;
}
//ahora que concateno todo los comentarios los ingreso a la lista de comentarios
let nuevo=new token();
nuevo.setValor(this.concatenar);   
nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
nuevo.setTipo("Cadena");   this.tokens.push(nuevo);     
this.concatenar="";                   
}




  ///////Para los caracteres y HTML
  if (this.codigo[this.iterador] == '\'')  // si detecto comillas simples
  {  this.iterador++;   
    for (var _j = 0; _j < this.codigo.length; _j++)
  { 
    if (this.codigo[this.iterador] == '\n') { this.columna = 1; this.fila++; }  

    if (this.codigo[this.iterador] == '\'' && this.codigo[this.iterador+1] == ')'&& this.codigo[this.iterador+2] == ';'||
     this.codigo[this.iterador] == '\'' && this.codigo[this.iterador+1] == ';')
    { break; }
    this.concatenar = this.concatenar + this.codigo[this.iterador];
                       
    this.iterador++;
  }
  //ahora que concateno todo los comentarios los ingreso a la lista de comentarios
  let nuevo=new token();
  nuevo.setValor(this.concatenar);   
  nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
  if(this.concatenar.length > 1){nuevo.setTipo("Html");  this.htmls.push(nuevo);  this.tokens.push(nuevo);  }else{nuevo.setTipo("Char");   this.tokens.push(nuevo); }     
  this.concatenar=""; this.iterador++;                      
  }

    /////////////////Tipo de Comentario //
    if (this.codigo[this.iterador] == '/' && this.codigo[this.iterador + 1] == '/')
    {     
      for (var _j = 0; _j < this.codigo.length; _j++)
    { 
      if (this.codigo[this.iterador+1] == '\n') { this.columna = 1;  break;}     
      this.concatenar = this.concatenar + this.codigo[this.iterador];
      if (this.codigo[this.iterador+1] == '\n')
      { break; }
                         
      this.iterador++;
    }
    //ahora que concateno todo los comentarios 
    let nuevo=new token();
    nuevo.setValor(this.concatenar);   nuevo.setTipo("Comentario");  nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
   // this.tokens.push(nuevo);    
   this.comentarios.push(nuevo); 
   this.concatenar="";    this.iterador++;                   
    }


    /////////////////Tipo de Comentario /*      */
    if (this.codigo[this.iterador] == '/' && this.codigo[this.iterador + 1] == '*')
    {     
      for (var _j = 0; _j < this.codigo.length; _j++)
    { 
      if (this.codigo[this.iterador] == '\n') { this.columna = 1; this.fila++; }     
      this.concatenar = this.concatenar + this.codigo[this.iterador];
      if (this.codigo[this.iterador] == '*' && this.codigo[this.iterador +1] == '/')
      { break; }

                         
      this.iterador++;
    }
    this.concatenar=this.concatenar +this.codigo[this.iterador+1]; 
    //ahora que concateno todo los comentarios los ingreso a la lista de comentarios
    let nuevo=new token();
    nuevo.setValor(this.concatenar);   nuevo.setTipo("Comentario");  nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
    //this.tokens.push(nuevo);   
     this.comentarios.push(nuevo); this.concatenar="";    this.iterador++; this.iterador++;                      
    }
    if (this.codigo[this.iterador] == '{')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo=new token();      nuevo.setValor(this.concatenar);   nuevo.setTipo("Llave_apertura");
      nuevo.setColumna(this.columna);      nuevo.setFila(this.fila);     this.tokens.push(nuevo);
      this.concatenar=""; 
    }
    if (this.codigo[this.iterador] == '}')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Llave_cierre");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '.')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Punto");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == ':')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Dos_puntos");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == ';')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Punto_coma");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '=')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Igual");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '(')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("P_apertura");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == ')')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("P_cierre");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == ',')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Coma");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '+')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Suma");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '-')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Resta");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '/')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Division");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '*')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Multiplicacion");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '>')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Mayor");
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }
    if (this.codigo[this.iterador] == '<')
    {
      this.concatenar=this.concatenar+this.codigo[this.iterador];
      let nuevo2=new token();      nuevo2.setValor(this.concatenar);     nuevo2.setTipo("Menor"); 
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
      this.concatenar="";
    }

    if (this.codigo[this.iterador].charCodeAt(0) >126||this.codigo[this.iterador].charCodeAt(0) ==35||this.codigo[this.iterador].charCodeAt(0) ==36
    ||this.codigo[this.iterador].charCodeAt(0) ==37)
    {
      let nuevo2=new token();      nuevo2.setValor(this.codigo[this.iterador].toString());     nuevo2.setTipo("Error Lexico"); 
      nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.errores_lexicos.push(nuevo2);
      this.concatenar="";
    }


    
    if (this.codigo[this.iterador] != ' '&& this.codigo[this.iterador] != '\n'&& this.codigo[this.iterador] != '\r'&& this.codigo[this.iterador] != '\t' 
   && this.codigo[this.iterador] != ';' && this.codigo[this.iterador] != '}'&& this.codigo[this.iterador] != '\''
   && this.codigo[this.iterador] != '(' && this.codigo[this.iterador] != ',' && this.codigo[this.iterador] != ')' 
   && this.codigo[this.iterador] != '+' && this.codigo[this.iterador] != '!' && this.codigo[this.iterador] != '=' 
   && this.codigo[this.iterador] != '-' && this.codigo[this.iterador] != '/' && this.codigo[this.iterador] != '*' 
   && this.codigo[this.iterador] != '.' && this.codigo[this.iterador] != ':' && this.codigo[this.iterador] != '#'
   && this.codigo[this.iterador] != '{'&& this.codigo[this.iterador] != '|'&& this.codigo[this.iterador] != '\"'
   && this.codigo[this.iterador] != '>'&& this.codigo[this.iterador] != '<'
    )
    { ///si detecto estos no concatena en la var concatenar2
        this.concatenar = this.concatenar + this.codigo[this.iterador];
   }
   if (this.codigo[this.iterador+1] == ' ' || this.codigo[this.iterador+1] == ';' || this.codigo[this.iterador+1] == '\n'
   || this.codigo[this.iterador+1] == '(' || this.codigo[this.iterador+1] == ',' || this.codigo[this.iterador+1] == ')' 
   || this.codigo[this.iterador+1] == '+' || this.codigo[this.iterador+1] == '!' || this.codigo[this.iterador+1] == '=' 
   || this.codigo[this.iterador+1] == '-' || this.codigo[this.iterador+1] == '/' || this.codigo[this.iterador+1] == '*' 
   || this.codigo[this.iterador+1] == '.' || this.codigo[this.iterador+1] == ':' || this.codigo[this.iterador+1] == '#'
   || this.codigo[this.iterador+1] == '{' || this.codigo[this.iterador+1] == '}'|| this.codigo[this.iterador+1] == '\'' 
   || this.codigo[this.iterador+1] == '<'|| this.codigo[this.iterador+1] == '>')
   { 
    if(this.concatenar.length>0){
                                let nuevo2=new token();      nuevo2.setValor(this.concatenar);   
    

                                if(this.concatenar=="class"){nuevo2.setTipo("P_class");}else if(this.concatenar=="int"){nuevo2.setTipo("P_int");} 
                                else if(this.concatenar=="var"){nuevo2.setTipo("var");}else if(this.concatenar=="else"){nuevo2.setTipo("P_else");}
                                else if(this.concatenar=="void"){nuevo2.setTipo("P_void");}else if(this.concatenar=="double"){nuevo2.setTipo("P_double");}
                                else if(this.concatenar=="char"){nuevo2.setTipo("P_char");}else if(this.concatenar=="string"){nuevo2.setTipo("P_string");}
                                else if(this.concatenar=="while"){nuevo2.setTipo("P_while");}else if(this.concatenar=="for"){nuevo2.setTipo("P_for");}
                                else if(this.concatenar=="if"){nuevo2.setTipo("P_if");}else if(this.concatenar=="Console"){nuevo2.setTipo("P_console");}
                                else if(this.concatenar=="Write"){nuevo2.setTipo("P_write");}else if(this.concatenar=="return"){nuevo2.setTipo("P_return");}
                                else if(this.concatenar=="continue"){nuevo2.setTipo("P_continue");}else if(this.concatenar=="bool"){nuevo2.setTipo("P_bool");}
                                else if(this.concatenar=="case"){nuevo2.setTipo("P_case");}else if(this.concatenar=="break"){nuevo2.setTipo("P_break");}
                                else if(this.concatenar=="main"){nuevo2.setTipo("variable");}else if(this.concatenar=="default"){nuevo2.setTipo("P_default");}
                                else if(this.concatenar=="true"){nuevo2.setTipo("true");}else if(this.concatenar=="false"){nuevo2.setTipo("false");}
                                else if(this.concatenar=="Tipo"){nuevo2.setTipo("tipo");}else if(this.concatenar=="switch"){nuevo2.setTipo("P_switch");}
                                else if(this.concatenar=="do"){nuevo2.setTipo("P_do");}else if(this.concatenar=="static"){nuevo2.setTipo("P_static");}
                                else if(Number(this.concatenar)>=0){
                                  if (this.codigo[this.iterador+1] == '.'){  /////////////////// para detectar double
                                    this.iterador++;
                                    for (var _j = 0; _j < this.codigo.length; _j++)
                                    { //abro for
                                        
                                     
                                      if (this.codigo[this.iterador] == ',' || this.codigo[this.iterador] == '/' ||this.codigo[this.iterador] == '+'
                                      || this.codigo[this.iterador] == '-'|| this.codigo[this.iterador] == ';'|| this.codigo[this.iterador] == '*'
                                      || this.codigo[this.iterador] == ' '|| this.codigo[this.iterador] == ')'
                                      )

                                      { this.iterador--; nuevo2.setValor(this.concatenar);   break; }
                                       this.concatenar = this.concatenar + this.codigo[this.iterador];                   
                                      this.iterador++;
                                    }////cierro For


                                    nuevo2.setTipo("double");
                                  }else{
                                    nuevo2.setTipo("numero");
                                  }
                                  
                                ///////////////////////////////
                                }else{nuevo2.setTipo("variable");}

                                nuevo2.setColumna(this.columna);      nuevo2.setFila(this.fila);    this.tokens.push(nuevo2);
                                 }
    this.concatenar="";
   }





 if (this.codigo[this.iterador] == '\n') { this.concatenar="";  this.columna = 0; this.fila++; }
this.iterador++;
this.columna++;

}//cierra el while


///aca visualizo los tokens en la consola
this.tokens.forEach(function (value) {
  console.log(value);
});


/////////   For que concatena el codigo de html
for(let i = 0;i< this.htmls.length ;i++){
this.html=this.html+this.htmls[i].getValor();
}
 

let ultimo=new token();  ///Agrego un token al final porque es el de aceptacion
ultimo.setValor("Ultimo");  ultimo.setTipo("Ultimo");
this.tokens.push(ultimo);
let objeto=new Sintactico(this.tokens); ////aca mando la lista de tokens para ser analizada
this.errores_sintacticos=objeto.getErrores();   ///aca agrego al arreglo de errores todo nuestros errores
this.python=objeto.getCadena_traducida();




////Creo el objeto para realizar el HTML
let traductor=new HTML_traduce(this.html); ////aca mando la lista de tokens para ser analizada
traductor.getnew_cadena();
 this.Json= traductor.getCad_JSON();

 







}//cierra el metodo analizar


















  

}
