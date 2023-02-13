import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent {
  @Input() valor: string = '';
  @Output() onClick = new EventEmitter<string>();

  soyOperador(v: string) {
    return v === '+' || v === '-' || v === '*' || v === '/';
  }

  handlerClick() {
    console.log(`click en ${this.valor}`);
    this.onClick.emit(this.valor);
  }
}
