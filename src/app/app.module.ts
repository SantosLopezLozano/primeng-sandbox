import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Ejercicio1Component } from './pages/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './pages/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './pages/ejercicio3/ejercicio3.component';
import { Ejercicio1gridComponent } from './pages/ejercicio1grid/ejercicio1grid.component';
import { Ejercicio2gridComponent } from './pages/ejercicio2grid/ejercicio2grid.component';
import { Ejercicio3gridComponent } from './pages/ejercicio3grid/ejercicio3grid.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio1gridComponent,
    Ejercicio2gridComponent,
    Ejercicio3gridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
