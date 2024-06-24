import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Achievement } from '../../models/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private achievementUrl = 'https://localhost:5001/Achievment'; 

  constructor(private http: HttpClient) {}

  getAchievements(): Observable<Achievement[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.get<Achievement[]>(this.achievementUrl, httpOptions);
  }

  addAchievement(achievement: Achievement): Observable<Achievement> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.post<Achievement>(`${this.achievementUrl}/`, achievement, httpOptions);
  }
}
