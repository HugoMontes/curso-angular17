import { Component } from '@angular/core';
import { OnlyTextDirective } from '../directives/only-text.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, OnlyTextDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  
  texto = '';

  show(): void {
    console.log(this.texto);
  }
}
