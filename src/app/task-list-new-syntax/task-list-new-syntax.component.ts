import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  IPriority,
  IStatus,
  ITask,
  StatusType,
} from '../models/components.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list-new-syntax',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './task-list-new-syntax.component.html',
  styleUrl: './task-list-new-syntax.component.scss',
})
export class TaskListNewSyntaxComponent {
  readonly LIST_STATES: StatusType[] = ['COMPLETED', 'PROGRESS', 'PENDING'];
  readonly LIST_OBJECT_STATES: IStatus[] = [
    { key: 'COMPLETED', text: 'Completado' },
    { key: 'PROGRESS', text: 'En progreso' },
    { key: 'PENDING', text: 'Pendiente' },
  ];
  readonly PRYORITY_LIST: IPriority[] = [
    { key: 'HIGH', text: 'Alta' },
    { key: 'MEDIUM', text: 'Media' },
    { key: 'LOW', text: 'Baja' },
  ];

  // task: ITask = {
  //   priority: 'MEDIUM',
  //   task: 'Aprender TypeScript',
  //   status: 'PROGRESS',
  // };

  list_task: ITask[] = [
    {
      priority: 'HIGH',
      task: 'Aprender TypeScript',
      status: 'PENDING',
    },
    {
      priority: 'LOW',
      task: 'Aprender Angular',
      status: 'PENDING',
    },
  ];

  colorText = 'white';
  inputValue = '';

  changeStatus(): void {
    // console.log(this.task);
  }

	updateTask(): void {
		this.list_task[1] = {
			priority: 'LOW',
			task: this.inputValue,
			status: 'PENDING'
		};
	}

  refresh(): void {
		this.list_task = [
			{
				priority: 'HIGH',
				task: 'Aprender TypeScript',
				status: 'PENDING'
			},
			{
				priority: 'LOW',
				task: 'Aprender Angular',
				status: 'PENDING'
			}
		];
	}

  trackByItems(index: number, item: ITask) {
    return index;
  }
}
