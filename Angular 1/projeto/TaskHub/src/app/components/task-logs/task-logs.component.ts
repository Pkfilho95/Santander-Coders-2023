import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-logs',
  templateUrl: './task-logs.component.html',
  styleUrls: ['./task-logs.component.scss']
})
export class TaskLogsComponent {
  @Input() taskLogs: any[] = []
}
