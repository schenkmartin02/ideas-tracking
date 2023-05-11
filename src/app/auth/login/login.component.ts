import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService:AuthService, private router:Router) {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(_ => this.router.navigateByUrl('/ideas'));
  }

  register() {
    this.router.navigateByUrl('/registration');
  }
}
