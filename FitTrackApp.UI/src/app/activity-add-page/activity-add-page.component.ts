import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity/activity.service';
import { Router } from '@angular/router';
import { ActivityType } from '../models/activityType';

@Component({
  selector: 'app-activity-add-page',
  templateUrl: './activity-add-page.component.html',
  styleUrl: './activity-add-page.component.css'
})
export class ActivityAddPageComponent {
  newActivity: Activity = {
    id:0,
    name: '',
    activityTypeId: '',
    description: '',
    startDate: new Date(),
    duration: 0,
    user: ''
  };

  activityTypes: ActivityType[] = [];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
    this.loadActivityTypes();
  }

  loadActivityTypes(): void {
    this.activityService.getActivityTypes().subscribe(data => {
      this.activityTypes = data;
    });
  }

  addActivity(form: any) {
    const newActivity: Activity = {
      id: form.value.id,
      name: form.value.name,
      description: form.value.description,
      activityTypeId: form.value.activityTypeId,
      startDate: form.value.startDate,
      duration: form.value.duration, 
      user: ''
    };

    this.activityService.addActivity(newActivity).subscribe(
      response => {
        console.log('Activity added successfully', response);
        this.router.navigate(['/activities']);
      },
      error => {
        console.error('Error adding activity', error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/activities']);
  }
}
