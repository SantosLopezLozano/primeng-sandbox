import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2gridComponent } from './ejercicio2grid.component';

describe('Ejercicio2gridComponent', () => {
  let component: Ejercicio2gridComponent;
  let fixture: ComponentFixture<Ejercicio2gridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio2gridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio2gridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
