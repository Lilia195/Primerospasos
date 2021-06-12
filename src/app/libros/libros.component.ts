import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:any;
  errorHttp:boolean|undefined;
  

  constructor( private http:HttpClient, public libroClicked:LibroclickedService) {   
  }

  cargarLista(){
    this.http.get('assets/listado.json').subscribe(
      (respuesta: Response|any) => { this.libros = respuesta; },
      (respuesta:Response)=>{this.errorHttp=true;}
    );
  }
  agregarLibro(_libroVisto:any){
    this.libroClicked.libroVisto(_libroVisto);
  }


  ngOnInit(): void {
    this.cargarLista();
  }

}
