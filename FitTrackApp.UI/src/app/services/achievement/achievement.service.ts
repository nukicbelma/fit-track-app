import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Achievement } from '../../models/achievement';



@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private achievementUrl = 'https://localhost:5001/Achievment'; 

  constructor(private http: HttpClient) {}

  getAchievements(): Observable<Achievement[]> {
    console.log("test")
    return this.http.get<Achievement[]>(this.achievementUrl);
  }
}
