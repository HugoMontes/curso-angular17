import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  inputMessate = 'Ingresa tus nombres';
  disableButton = false;

  constructor() {
    setTimeout(() => {
      console.log('Boton deshabilitado...');
      this.disableButton = true;
    }, 5000);
  }

  clickSaveData(): void {
    console.log('Guardando datos...');
  }

  captureEventInput(event: Event): void {
    const inputEvent = event as InputEvent;
    console.log('Evento input...', inputEvent.data);    
  }
}
