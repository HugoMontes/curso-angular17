import { Component } from '@angular/core';
import { TaskListNewSyntaxComponent } from './task-list-new-syntax/task-list-new-syntax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListNewSyntaxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular17';
}
