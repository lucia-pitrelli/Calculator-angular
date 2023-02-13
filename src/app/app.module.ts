import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { DisplayComponent } from './components/display/display.component';
import { BotonComponent } from './components/boton/boton.component';
import { BtnClearComponent } from './components/btn-clear/btn-clear.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    DisplayComponent,
    BotonComponent,
    BtnClearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
