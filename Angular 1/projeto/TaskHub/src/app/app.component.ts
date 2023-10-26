import { Component, OnInit } from '@angular/core';
import { Task } from './models/task-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  database: Task[] = []
  detailTask: Task = new Task()
  updateTask: Task | null = null

  ngOnInit(): void {
    let todo = new Task('teste1', 'teste desc 1', new Date(), 'toDo')
    let progress = new Task('teste2', 'teste desc 2', new Date(), 'inProgress')
    let completed = new Task('teste3', 'teste desc 3', new Date(), 'Completed')
    this.database.push(todo, progress, completed)
  }

  onAddTask(newTask: Task) {
    this.database.push(newTask)
  }

  onDetailTask(task: Task) {
    console.log(this.database)
    this.detailTask = task
  }

  onUpdateTask(task: Task) {
    this.updateTask = task
  }

  onSaveTask(updateTaskValues: Task) {
    const task = this.database.find(task => task.id === this.updateTask?.id)
    
    if (task) {
      task.title = updateTaskValues.title
      task.description = updateTaskValues.description
      task.date = new Date(updateTaskValues.title)
      task.status = task.status
    }
  }

}
