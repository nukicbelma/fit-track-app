import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-activity-table-page',
  templateUrl: './activity-table-page.component.html',
  styleUrls: ['./activity-table-page.component.css']
})
export class ActivityTablePageComponent implements OnInit {
  activities: Activity[] = [];
  activityTypes: string[] = [];
  searchQuery: string = '';
  filterType: string = '';
  filterDate: string = '';

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.loadActivities();
    this.loadActivityTypes();
  }

  loadActivities(): void {
    this.activityService.getActivities(this.searchQuery, this.filterType, this.filterDate).subscribe(data => {
      this.activities = data;
    });
  }

  loadActivityTypes(): void {
    this.activityService.getActivityTypes().subscribe(data => {
      this.activityTypes = data;
    });
  }

  onSearchChange(): void {
    this.loadActivities();
  }

  onFilterTypeChange(): void {
    this.loadActivities();
  }

  onFilterDateChange(): void {
    this.loadActivities();
  }
}
