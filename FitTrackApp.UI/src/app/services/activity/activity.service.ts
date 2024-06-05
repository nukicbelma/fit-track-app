import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Activity } from '../../models/activity';
import { ActivityType } from '../../models/activityType';

interface ActivitySearchRequest {
  name: string;
  description: string;
  activityTypeId: string;
  startDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityUrl = 'https://localhost:5001/Activity'; 
  private activityTypeUrl = 'https://localhost:5001/ActivityType';

  constructor(private http: HttpClient) { }

  getActivities(activitySearchRequest: ActivitySearchRequest): Observable<Activity[]> {
    let params = new HttpParams();
    if (activitySearchRequest.name) {
      params = params.set('name', activitySearchRequest.name);
    }
    if (activitySearchRequest.description) {
      params = params.set('description', activitySearchRequest.description);
    }
    if (activitySearchRequest.activityTypeId) {
      params = params.set('activityTypeId', activitySearchRequest.activityTypeId);
    }
    if (activitySearchRequest.startDate) {
      params = params.set('startDate', activitySearchRequest.startDate);
    }

    return this.http.get<Activity[]>(this.activityUrl, { params });
  }

  getActivityTypes(): Observable<ActivityType[]> {
    return this.http.get<ActivityType[]>(this.activityTypeUrl);
  }
  

  addActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.activityUrl}/`, activity);
  }

  updateActivity(id: number, activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(`${this.activityUrl}/${id}`, activity);
  }

  getActivityById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.activityUrl}/${id}`);
  }

  deleteActivity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.activityUrl}/${id}`);
  }

}
