import { Component } from '@angular/core';
import { ShowInfoComponent } from './show-info/show-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular17';
}
