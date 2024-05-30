import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Activity } from '../../models/activity';
import { ActivityType } from '../../models/activityType';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityUrl = 'https://localhost:5001/Activity'; 
  private activityTypeUrl = 'https://localhost:5001/ActivityType';

  constructor(private http: HttpClient) { }

  getActivities(searchQuery: string = '', activityType: string = '', startDate: string = ''): Observable<Activity[]> {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.set('searchQuery', searchQuery);
    }
    if (activityType) {
      params = params.set('activityType', activityType);
    }
    if (startDate) {
      params = params.set('startDate', startDate);
    }

    return this.http.get<Activity[]>(this.activityUrl, { params });
  }

  getActivityTypes(): Observable<string[]> {
    return this.http.get<ActivityType[]>(this.activityTypeUrl).pipe(
      map((activityTypes: any[]) => activityTypes.map(activityType => activityType.name))
    );
  }

  addActivity(activity: Activity): Observable<Activity> {
    console.log("fffffffffff")
    console.log(activity.activityType);
    return this.http.post<Activity>(`${this.activityUrl}/`, activity);
  }
}
