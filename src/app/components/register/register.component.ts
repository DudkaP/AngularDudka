import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  usernameError : string;

  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
        username: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)

          ]
        ),
        password: new FormControl(null,
          [
            Validators.minLength(2),
            Validators.maxLength(20),
            Validators.required
          ]
        ),
        confirmPassword: new FormControl(null,
          [
            Validators.minLength(2),
            Validators.maxLength(20),
            Validators.required
          ])
      },
      [this._checkPasswords])
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this.authService.register(rawValue).subscribe(
      value => this.router.navigate(['login']),
      e => this.usernameError = e.error.username[0]
    )
  }
  _checkPasswords(form:AbstractControl):ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame: 'Not The Same'}
  }
}