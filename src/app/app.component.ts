import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LikeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular17';
}
