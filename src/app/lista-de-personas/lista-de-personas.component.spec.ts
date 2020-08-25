import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePersonasComponent } from './lista-de-personas.component';

describe('ListaDePersonasComponent', () => {
  let component: ListaDePersonasComponent;
  let fixture: ComponentFixture<ListaDePersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
