import { Component } from '@angular/core';
import { ITask } from '../models/components.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  task: ITask = {
    priority: 'MEDIUM',
    task: 'Aprender TypeScript',
    status: 'PROGRESS',
  };

  colorText = 'white';
  inputValue = '';

  changeStatus(): void {
    console.log(this.task);
  }
}
