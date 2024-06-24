import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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

    const httpOptions = {
      params: params,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.get<Activity[]>(this.activityUrl, httpOptions);
  }

  getActivityTypes(): Observable<ActivityType[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.get<ActivityType[]>(this.activityTypeUrl, httpOptions);
  }

  addActivity(activity: Activity): Observable<Activity> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.post<Activity>(this.activityUrl, activity, httpOptions);
  }

  updateActivity(id: number, activity: Activity): Observable<Activity> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.put<Activity>(`${this.activityUrl}/${id}`, activity, httpOptions);
  }

  getActivityById(id: number): Observable<Activity> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.get<Activity>(`${this.activityUrl}/${id}`, httpOptions);
  }

  deleteActivity(id: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };

    return this.http.delete<void>(`${this.activityUrl}/${id}`, httpOptions);
  }
  
}
