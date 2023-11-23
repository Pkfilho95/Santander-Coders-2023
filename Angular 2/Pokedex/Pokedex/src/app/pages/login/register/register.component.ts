import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor (private _fb: FormBuilder, private _router: Router) { }

  public registerForm: FormGroup = this._fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  })

  public submitRegister(): void {
    this.registerForm.markAllAsTouched()

    if (!this.registerForm.valid) {
      alert('Invalid form.')
      return
    }

    const {username, password} = this.registerForm.value

    localStorage.setItem(String(username).toLocaleUpperCase(), password)
    this.registerForm.reset()
    alert('User created successfully.')
    
    this._router.navigate(['/'])
  }

}
