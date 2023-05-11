import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  username!: string;
  email!: string;
  password!: string;

  constructor(private router: Router, private authService: AuthService) {
  }

  register() {
      this.authService.register(this.username ,this.email, this.password).subscribe(_ => this.router.navigateByUrl('/login'))
  }
}
