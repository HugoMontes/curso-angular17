import { Component } from '@angular/core';
import { DemoDirective } from './directives/demo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular17';
}
