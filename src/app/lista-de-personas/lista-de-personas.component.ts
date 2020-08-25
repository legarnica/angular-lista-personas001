import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-personas',
  templateUrl: './lista-de-personas.component.html',
  styleUrls: ['./lista-de-personas.component.css']
})
export class ListaDePersonasComponent implements OnInit {

  public personas:any = [
    {nombre:"Hugo"}, 
    {nombre:"Paco"},
    {nombre:"Luis"},
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
