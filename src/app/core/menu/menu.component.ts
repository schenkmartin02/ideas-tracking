import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  isLoggedIn = false;
  name: string | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      this.name = user.username
    })
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
