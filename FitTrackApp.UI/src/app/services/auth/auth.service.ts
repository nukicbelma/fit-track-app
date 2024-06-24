import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'https://localhost:5001/Auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.getCurrentUser().subscribe();
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    const loginUrl = `${this.baseApiUrl}/Login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(loginUrl, credentials, { headers, withCredentials: true }).pipe(
      tap(user => {
        console.log('Login successful', user);
        this.isLoggedIn = true;
      }),
      catchError(this.handleError('Login', null))
    );
  }

  logout(): Observable<any> {
    const logoutUrl = `${this.baseApiUrl}/Logout`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(logoutUrl, {}, { headers, withCredentials: true }).pipe(
      tap(
        () => {
          console.log('Logout successful');
          this.isLoggedIn = false;
          this.currentUserSubject.next(null); 
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Logout failed', error);
          this.isLoggedIn = false; 
          this.currentUserSubject.next(null);
          this.router.navigate(['/home']);
        }
      ),
      catchError(this.handleError('Logout', null))
    );
  }

  getCurrentUser(): Observable<any> {
    const currentUserUrl = `${this.baseApiUrl}/Current-User`;

    return this.http.get<any>(currentUserUrl, { withCredentials: true }).pipe(
      tap(user => {
        console.log('Current user fetched');
        this.currentUserSubject.next(user);
        this.isLoggedIn = !!user;
      }),
      catchError(this.handleError('GetCurrentUser', null))
    );
  }

  private handleError(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed:`, error);

      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      }

      return of(result);
    };
  }
}
