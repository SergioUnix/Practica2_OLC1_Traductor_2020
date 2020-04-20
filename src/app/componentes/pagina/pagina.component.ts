import { Component, OnInit, HostBinding } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista games
import * as saveAs from 'file-saver';

import {token}from 'src/app/clases/token';
import {Sintactico}from 'src/app/clases/Sintactico';
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
public consola;
public python;
public html="";


file:any;



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
      this.codigo = fileReader.result;  ////// Aca mando a una variable para ponerlo en la descripccion
      console.log(this.file.name);          ////// nombre del archivo abierto
   }
    
    fileReader.readAsText(this.file);
}


//////////Guarda el archivo 
Guardar() {
  let file = new Blob([this.codigo], { type: 'text/csv;charset=utf-8' });
  saveAs(file, 'helloworld.txt')
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
errores: any=[];
htmls:token[]=[];
comentarios:token[]=[];



public iterador:number = 0;
public id:number=0;

analizador(){
 // console.log('something awesome');


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
    if (this.codigo[this.iterador] == '\'')
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
      if (this.codigo[this.iterador] == '\n') { this.columna = 1; this.fila++; }     
      this.concatenar = this.concatenar + this.codigo[this.iterador];
      if (this.codigo[this.iterador] == '\n')
      { break; }
                         
      this.iterador++;
    }
    //ahora que concateno todo los comentarios 
    let nuevo=new token();
    nuevo.setValor(this.concatenar);   nuevo.setTipo("Comentario");  nuevo.setColumna(this.columna); nuevo.setFila(this.fila);
   // this.tokens.push(nuevo);    
   this.comentarios.push(nuevo); 
   this.concatenar="";                       
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
                                else if(this.concatenar=="while"){nuevo2.setTipo("p_while");}else if(this.concatenar=="for"){nuevo2.setTipo("P_for");}
                                else if(this.concatenar=="if"){nuevo2.setTipo("P_if");}else if(this.concatenar=="Console"){nuevo2.setTipo("P_console");}
                                else if(this.concatenar=="Write"){nuevo2.setTipo("P_write");}else if(this.concatenar=="return"){nuevo2.setTipo("P_return");}
                                else if(this.concatenar=="continue"){nuevo2.setTipo("P_continue");}else if(this.concatenar=="bool"){nuevo2.setTipo("P_bool");}
                                else if(this.concatenar=="case"){nuevo2.setTipo("P_case");}else if(this.concatenar=="break"){nuevo2.setTipo("P_break");}
                                else if(this.concatenar=="main"){nuevo2.setTipo("variable");}else if(this.concatenar=="default"){nuevo2.setTipo("P_default");}
                                else if(this.concatenar=="true"){nuevo2.setTipo("true");}else if(this.concatenar=="false"){nuevo2.setTipo("false");}
                                else if(this.concatenar=="Tipo"){nuevo2.setTipo("tipo");}else if(this.concatenar=="switch"){nuevo2.setTipo("P_switch");}
                                else if(this.concatenar=="do"){nuevo2.setTipo("P_do");}
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



this.tokens.forEach(function (value) {
  console.log(value);
});



for (let name of this.html) {
  console.log(name);
}

let ultimo=new token();
ultimo.setValor("Ultimo");  ultimo.setTipo("Ultimo");
this.tokens.push(ultimo);

let objeto=new Sintactico(this.tokens);







}//cierra el metodo analizar


















  

}
