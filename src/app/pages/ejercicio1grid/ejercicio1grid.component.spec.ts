import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1gridComponent } from './ejercicio1grid.component';

describe('Ejercicio1gridComponent', () => {
  let component: Ejercicio1gridComponent;
  let fixture: ComponentFixture<Ejercicio1gridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio1gridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio1gridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
