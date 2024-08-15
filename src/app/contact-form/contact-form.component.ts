import { Component } from '@angular/core';
import { OnlyTextDirective } from '../directives/only-text.directive';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [OnlyTextDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  
  texto = '';

  show(): void {
    console.log(this.texto);
  }
}
