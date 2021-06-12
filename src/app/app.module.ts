import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LibroclickedService } from './libroclicked.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AutoresComponent } from './autores/autores.component';


const rutas: Routes = [
  {path:'',component:InicioComponent,pathMatch:'full'},
  {path:'listado-libros',component:LibrosComponent},
  {path:'informacion/:libroId',component:InformacionComponent},
  {path:'autores',component:AutoresComponent},
  {path:'**',redirectTo:'/'}
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    LibrosComponent,
    InformacionComponent,
    AutoresComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
  ],
  providers: [ LibroclickedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
