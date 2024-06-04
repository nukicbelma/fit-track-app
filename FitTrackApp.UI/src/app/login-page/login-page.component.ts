import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  credentials = { username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
       response => {
        this.successMessage = 'Logged in successfully';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      error => {
        this.errorMessage = 'Login failed. Incorrect username or password.';
        this.successMessage = ''; 
      }
    );
  }
}
