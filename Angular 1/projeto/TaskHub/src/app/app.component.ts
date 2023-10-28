import { Component, OnInit } from '@angular/core';
import { Task } from './models/task-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  database: Task[] = []
  taskLogs: any[] = []
  detailTask: Task | null = null
  editTask: Task | null = null

  ngOnInit(): void {
    let todo = new Task('teste1', 'teste desc 1', new Date('2023-10-28'), 'toDo')
    let progress = new Task('teste2', 'teste desc 2', new Date(), 'inProgress')
    let completed = new Task('teste3', 'teste desc 3', new Date(), 'Completed')
    this.database.push(todo, progress, completed)
  }

  onAddTask(newTask: Task) {
    this.database.push(newTask)
    this.taskLogs.push({...newTask, log: 'Create'})
  }

  onDetailTask(task: Task) {
    this.detailTask = task
    this.taskLogs.push({...task, log: 'Read'})
  }

  onEditTask(task: Task) {
    this.editTask = task
  }

  onUpdateTask(editTaskValues: Task) {
    const task = this.database.find(task => task.id === this.editTask?.id)
    
    if (task) {
      this.taskLogs.push({...task, log: 'Update'})

      task.title = editTaskValues.title
      task.description = editTaskValues.description
      task.date = editTaskValues.date
      task.status = editTaskValues.status
      task.tags = editTaskValues.tags
    }
  }

  onClearTask(clearTask=null) {
    this.editTask = clearTask
  }

  // onLogTask(task: Task) {
  //   this.taskLogs.push(task)
  // }

}
