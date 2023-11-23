import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _fb: FormBuilder, private _router: Router) { }

  public loginForm: FormGroup = this._fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  })

  public onRegister(): void {
    this._router.navigate(['/register'])
  }

  public submitLogin(): void {
    this.loginForm.markAllAsTouched()

    if (!this.loginForm.valid) {
      alert('Invalid form.')
      return
    }

    const { username, password } = this.loginForm.value

    const correctPassword = localStorage.getItem(username.toLocaleUpperCase())

    if (correctPassword === password) {
      localStorage.setItem('is_authenticated', username)
      this._router.navigate(['/pokemon'])

    } else {
      alert('Invalid username or password.')
    }
  }

}
