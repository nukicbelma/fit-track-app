import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Token } from '@angular/compiler';

interface UserLoginDTO {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://localhost:5001/api/Auth/Login';
  private logoutUrl = 'https://localhost:5001/api/Auth/Logout';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: UserLoginDTO): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token);
          console.log('token',response.token)
          this.router.navigate(['/home']);
        }
        console.log(response)
      }),
      catchError(error => {
        console.error('Error logging in', error);
        throw error; // Re-throw the error to be handled by the caller
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.logoutUrl, {}).pipe(
      tap(() => {
        this.removeToken();
        this.router.navigate(['/login']);
      }),
      catchError(error => {
        console.error('Error logging out', error);
        throw error; // Re-throw the error to be handled by the caller
      })
    );
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  private getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  private removeToken(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}
