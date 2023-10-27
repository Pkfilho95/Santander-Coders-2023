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
  @Output() editTask = new EventEmitter()
  // @Output() logTask = new EventEmitter()

  columns = [
    {name: 'To Do', value: 'toDo', color: 'warning'},
    {name: 'In Progress', value: 'inProgress', color: 'info'},
    {name: 'Completed', value: 'Completed', color: 'success'}
  ]

  // showLogTask(task: Task) {
  //   this.logTask.emit(task)
  // }

  showTaskDetail(task: Task) {
    this.detailTask.emit(task)
  }

  editTaskForm(task: Task) {
    this.editTask.emit(task)
  }

}
