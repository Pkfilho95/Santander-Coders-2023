import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  @Input() task = new Task()

  clearDetail() {
    this.task = new Task()
  }
}