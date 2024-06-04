import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.css'
})
export class NavigationHeaderComponent {
  constructor(public authService: AuthService) {
    console.log(this.authService.isLoggedIn());
  }

  
  logout(): void {
    this.authService.logout();
  }
}
