import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // modelo que acepta el componente
  @Input() persona:{nombre:string};

  constructor() { }

  ngOnInit(): void {
  }

}
