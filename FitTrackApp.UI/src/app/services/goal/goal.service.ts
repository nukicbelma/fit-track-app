import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goalUrl = 'https://localhost:5001/Goal'; 
 
  constructor(private http: HttpClient) { }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalUrl);
  }
}