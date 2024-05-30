import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-add-page',
  templateUrl: './activity-add-page.component.html',
  styleUrl: './activity-add-page.component.css'
})
export class ActivityAddPageComponent {
  newActivity: Activity = {
    name: '',
    activityType: '',
    description: '',
    startDate: new Date(),
    duration: 0,
    user: ''
  };

  activityTypes: string[] = [];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
    this.loadActivityTypes();
  }

  loadActivityTypes(): void {
    this.activityService.getActivityTypes().subscribe(data => {
      this.activityTypes = data;
    });
  }

  /*addActivity(): void {
    // Implement the method to add a new activity
    console.log('New activity added:', this.newActivity);
    
    // Navigate back to the activity table page after adding the activity
    this.router.navigate(['/activities']);
  }*/

  addActivity(form: any) {
    const newActivity: Activity = {
      name: form.value.name,
      description: form.value.description,
      activityType: form.activityType.value,
      startDate: form.startDate.value,
      duration: form.duration.value,
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
