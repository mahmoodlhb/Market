import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {UsersModel} from "../Models/usersModel";
import {RoleUserService} from "../Services/role-user.service";
import {RoutingClass} from "../../RoutDirectory/RoutingClass";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formIsSubmitted = new BehaviorSubject<boolean>(false);
  users: UsersModel[] = [
    {
      id: 1,
      userName: "mohammad",
      password: "1234",
      isAdmin: false,
    },
    {
      id: 2,
      userName: "ali",
      password: "1234",
      isAdmin: false,
    },
    {
      id: 3,
      userName: "gholi",
      password: "1234",
      isAdmin: false,
    }
  ]

  constructor(private _role: RoleUserService,private _navigate:Router) {
    this._initForm();
  }

  public get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
  }

  private _initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required,]),
      password: new FormControl(null, [Validators.required, Validators.min(0)])
    })
  }

  onSubmit() {
    this.formIsSubmitted.next(true);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      if (this.loginForm.value.userName === "mahmoodlhb" && this.loginForm.value.password === "1234") {
        this._role.adminLogin();
        this._navigate.navigate([RoutingClass.adminPanel]).finally();
      } else {
        for (let userinfo of this.users) {
          if (this.loginForm.value.id === userinfo.id) {
            this._role.login();
          }
        }
      }
    }
  }
}
