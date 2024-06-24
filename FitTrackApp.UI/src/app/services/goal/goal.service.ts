import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goalUrl = 'https://localhost:5001/Goal'; 

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalUrl, this.httpOptions);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(`${this.goalUrl}/`, goal, this.httpOptions);
  }

  updateGoal(id: number, goal: Goal): Observable<Goal> {
    return this.http.put<Goal>(`${this.goalUrl}/${id}`, goal, this.httpOptions);
  }

  getGoalById(id: number): Observable<Goal> {
    return this.http.get<Goal>(`${this.goalUrl}/${id}`, this.httpOptions);
  }

  deleteGoal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.goalUrl}/${id}`, this.httpOptions);
  }
}
