import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() taskList: Task[] = []
  @Output() detailTask = new EventEmitter()
  @Output() updateTask = new EventEmitter()

  columns = [
    {name: 'To Do', value: 'toDo', color: 'warning'},
    {name: 'In Progress', value: 'inProgress', color: 'info'},
    {name: 'Completed', value: 'Completed', color: 'success'}
  ]

  showTaskDetail(task: Task) {
    this.detailTask.emit(task)
  }

  updateTaskForm(task: Task) {
    this.updateTask.emit(task)
  }

}
