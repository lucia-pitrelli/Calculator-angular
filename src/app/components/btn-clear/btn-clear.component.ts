import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-clear',
  templateUrl: './btn-clear.component.html',
  styleUrls: ['./btn-clear.component.css'],
})
export class BtnClearComponent {
  @Output() onClick = new EventEmitter();

  handlerClick() {
    this.onClick.emit();
  }
}
