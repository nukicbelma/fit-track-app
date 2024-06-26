import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'https://localhost:5001/Auth';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    this.isLoggedIn().subscribe(
      (isLoggedIn) => {
        this.isLoggedInSubject.next(isLoggedIn);
      },
      (error) => {
        console.error('Error checking login status', error);
        this.isLoggedInSubject.next(false);
      }
    );
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    const loginUrl = `${this.baseApiUrl}/Login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(loginUrl, credentials, { headers, withCredentials: true }).pipe(
      tap(user => {
        console.log('Login successful', user);
        this.isLoggedInSubject.next(true);
      }),
      catchError(this.handleError('Login', null))
    );
  }

  logout() {
    this.http.post(`${this.baseApiUrl}/Logout`, {}, { withCredentials: true }).subscribe(
      () => {
        this.isLoggedInSubject.next(false);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }

  isLoggedIn(): Observable<boolean> {
    const isLoggedInUrl = `${this.baseApiUrl}/IsLoggedIn`;
    return this.http.get<boolean>(isLoggedInUrl, { withCredentials: true });
  }

  private handleError(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed:`, error);

      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.router.navigate(['/login']);
      }

      return of(result);
    };
  }
}
