import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    tags: this.formBuilder.array([])
  })

  @Input() task: Task | null = null
  @Output() newTask = new EventEmitter()
  @Output() updateTask = new EventEmitter()
  @Output() clearTask = new EventEmitter()

  updateForm = false

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.tags.clear()

    if (this.task) {
      this.taskForm.patchValue({...changes['task'].currentValue})
      this.task.tags?.forEach(tag => {
        this.addTag(tag)
      })
      this.updateForm = true
    }
  }

  get tags() {
    return this.taskForm.get('tags') as FormArray
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
    
    this.clearForm()
  }

  clearForm() {
    this.taskForm.reset()
    this.tags.clear()
    this.clearTask.emit(null)
    this.updateForm = false
  }

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required))
  }

  removeTag(index: number) {
    this.tags.removeAt(index)
  }

}
