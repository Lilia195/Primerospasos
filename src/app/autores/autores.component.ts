import { Component, OnInit, Renderer2 } from '@angular/core';
import listado from 'src/assets/listado.json';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
   libros:Array<object>|any;
   clearElement:HTMLElement|any;

  constructor(private ren:Renderer2) { 
    this.libros=listado;
  }
  activeMethod(elemen:HTMLElement){
    if(this.clearElement){
      this.ren.removeClass(this.clearElement,'miClass');
    }
    let nuevoElemento= this.ren.createElement('span');
    this.ren.setProperty(nuevoElemento,'innerHTML',' *');
    this.ren.appendChild(elemen,nuevoElemento);

    this.ren.setAttribute(elemen,'data-select','true');
    this.ren.addClass(elemen,'miClass');
    this.clearElement=elemen;
  } 
  ngOnInit(): void {
  }
 

}
