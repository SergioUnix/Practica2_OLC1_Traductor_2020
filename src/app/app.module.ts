import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';//tambien se necesita importa HttpClientModule
import {FormsModule} from '@angular/forms';  //necesario para lanzar mis datos por medio de [NGModel]

import { AppComponent } from './app.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';      //import 'codemirror';


@NgModule({
  declarations: [
    AppComponent, 
    PaginaComponent,
    Pagina2Component,
   
        


  ],
  imports: [
    BrowserModule,
    HttpClientModule,         //escribo aca el httpClientModule
    FormsModule,             //necesario ponerlo para enlazar datos con el objeto creado tipo interfaz
    CodemirrorModule
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
