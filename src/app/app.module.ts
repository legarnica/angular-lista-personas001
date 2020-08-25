import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { PersonaComponent } from './lista-de-personas/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDePersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
