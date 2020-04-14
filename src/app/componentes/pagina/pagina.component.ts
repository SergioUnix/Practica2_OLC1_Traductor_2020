import { Component, OnInit, HostBinding } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista games
import * as saveAs from 'file-saver';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

//  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 

public titulo:string;
public comentario:string;
public year: number;
asignaciones: any=[];
users =['ryan','Jose','Ariel']; //es un arreglo
public isErrorGuardar=false;

public fileString;
public titulo2 ="hola mundo";

file:any;
unkown:any;







name = 'Angular 6';
codeMirrorOptions: any = {
theme: 'idea',
mode: 'application/ld+json',
lineNumbers: true,
lineWrapping: true,
foldGutter: true,
gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
autoCloseBrackets: true,
matchBrackets: true,
lint: true
};


obj;























public cod_actividad_padre=0;

  constructor() {
  //this.titulo="Hola mundo, soy un componente ";
  //this.comentario = "Este es mi primer componenete ";
  //this.year = 2020;
  //console.log("Componente Cargado ....");
  //console.log(this.titulo, this.comentario, this.year);


   }

  ngOnInit(): void {

    
    this.obj= JSON.stringify({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "title": "Object",
      "additionalProperties": false,
      "properties": {
        "string": {
          "type": "string",
          "title": "String"
        }
      }
    }, null, ' ');
  }


  setEditorContent(event) {
    // console.log(event, typeof event);
    console.log(this.obj);
  }





  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument()
  }

  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
     // console.log(fileReader.result);
      this.fileString = fileReader.result;  ////// Aca mando a una variable para ponerlo en la descripccion
      console.log(this.file.name);
      console.log(this.file.webkitRelativePath);
      

    }
    
    fileReader.readAsText(this.file);
}



SaveDemo() {
  let file = new Blob(['hello world'], { type: 'text/csv;charset=utf-8' });
  saveAs(file, 'helloworld.csv')
}







  

}
