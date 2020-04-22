import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';//tambien se necesita importa HttpClientModule
import {FormsModule} from '@angular/forms';  //necesario para lanzar mis datos por medio de [NGModel]

import { AppComponent } from './app.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';      //import 'codemirror';
import {MatTabsModule} from '@angular/material/tabs';                 ///esto es para utilizar pestañas en tabs
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; ////se agrego al instalar angular material
import { MatSliderModule } from '@angular/material/slider';  ///agrego yo para verificar si funciona mi angular material
import {MatIconModule} from '@angular/material/icon';  ///agrego los iconos

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
    CodemirrorModule, 
    BrowserAnimationsModule,
    MatSliderModule,             ////agrego yo para probar angulara material
    MatTabsModule,
    MatIconModule
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
