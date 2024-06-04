import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity/activity.service';
import { Router } from '@angular/router';
import { ActivityType } from '../models/activityType';

@Component({
  selector: 'app-activity-table-page',
  templateUrl: './activity-table-page.component.html',
  styleUrls: ['./activity-table-page.component.css']
})
export class ActivityTablePageComponent implements OnInit {
  activities: Activity[] = [];
  activityTypes: ActivityType[] = [];
  activitySearchRequest = { name: '', description: '' , activityTypeId: '', startDate: ''};
  activityTypeMap: Map<string, string> = new Map();

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
    this.loadActivities();
    this.loadActivityTypes();
  }

  loadActivities(): void {
    this.activityService.getActivities(this.activitySearchRequest).subscribe(data => {
      this.activities = data;
    });
  }

  loadActivityTypes(): void {
    this.activityService.getActivityTypes().subscribe(data => {
      this.activityTypes = data;
      this.activityTypeMap = new Map(data.map(type => [type.id, type.name]));
    });
  }

  onSearchNameChange(): void {
    this.loadActivities();
  }

  onSearchDescriptionChange(): void {
    this.loadActivities();
  }

  onFilterTypeChange(): void {
    this.loadActivities();
  }

  onFilterDateChange(): void {
    this.loadActivities();
  }

  addNewActivity() : void {
    this.router.navigate(['/activity-add']);
  }

  editActivity(id: number): void {
    this.router.navigate(['/activity-edit', id]);
  }

  getActivityTypeName(typeId: string): string {
    return this.activityTypeMap.get(typeId) || 'Unknown';
  }
}
