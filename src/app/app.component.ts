import { Component } from '@angular/core';
import { TaskListOnlyStandaloneComponent } from './task-list-only-standalone/task-list-only-standalone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListOnlyStandaloneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular17';
}
