import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3gridComponent } from './ejercicio3grid.component';

describe('Ejercicio3gridComponent', () => {
  let component: Ejercicio3gridComponent;
  let fixture: ComponentFixture<Ejercicio3gridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio3gridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio3gridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
