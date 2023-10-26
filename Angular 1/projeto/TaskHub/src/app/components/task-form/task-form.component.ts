import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnChanges {
  public taskForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['toDo', Validators.required],

  })

  @Input() task: Task | null = null
  @Output() newTask = new EventEmitter()
  @Output() updateTask = new EventEmitter()

  updateForm = false

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.task) {
      this.taskForm.patchValue({...changes['task'].currentValue})
      this.updateForm = true
    }
  }

  submitTask() {
    if (this.taskForm.invalid) {
      alert('Invalid task.')
      return
    }

    if (!this.updateForm) {
      this.newTask.emit(this.taskForm.value)
    } else {
      this.updateTask.emit(this.taskForm.value)
    }
    this.taskForm.reset()
    this.updateForm = false
  }

  clearForm() {
    this.taskForm.reset()
    this.updateForm = false
  }

}
