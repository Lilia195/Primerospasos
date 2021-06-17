
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import listado from 'src/assets/listado.json';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  libros:Array<object>;
  libroId:number= 0;
  libroClick:any;

  constructor(private rutasuario:ActivatedRoute){
    this.libros=listado;
   }

   filtroId(libro:any){
     return libro.id==this;
   }

   libroBuscador(){
     return this.libros.filter(this.filtroId,this.libroId)[0];
   }
  ngOnInit(): void {
    this.rutasuario.params.subscribe(params=>{
      this.libroId= params['libroId'];
      this.libroClick=this.libroBuscador();
    })


  }
}
