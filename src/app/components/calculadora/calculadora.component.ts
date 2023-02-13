import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  expresion: string = '0';

  agregarExpresion(valor: string) {
    if (valor === '=') {
      console.log('Calculando...');
      this.expresion = evaluate(this.expresion);
    } else {
      if (this.expresion === '0') {
        this.expresion = '';
      }
      this.expresion += valor;
    }
  }

  limpiarDisplay() {
    this.expresion = '0';
  }
}
