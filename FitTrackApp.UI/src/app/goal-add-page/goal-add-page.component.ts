import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from '../models/goal';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-goal-add-page',
  templateUrl: './goal-add-page.component.html',
  styleUrls: ['./goal-add-page.component.css']
})
export class GoalAddPageComponent {
  newGoal: Goal = {
    activity: '',
    userId: 0,
    durationUnit: '',
    createdDate: new Date(),
    updatedDate: new Date(),
    duration: 0, 
    id:0,
    user: '',
    measureUnit: '',
    frequency: 0, 
    activityId: 0
  };

  activities: string[] = [];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
    this.loadActivities();
  }

  cancel(): void {
    this.router.navigate(['/goals']);
  }

  loadActivities(): void {
    /*this.activityService.getActivities().subscribe(data => {
      this.activities = data;
    });*
  }

  addGoal(form: any) {
    /*const newGoal: Goal = {
      name: form.value.name,
      description: form.value.description,
      activityType: form.activityType.value,
      startDate: form.startDate.value,
      duration: form.duration.value,
      user: ''
    };

    this.goalService.addActivity(newGoal).subscribe(
      response => {
        this.router.navigate(['/activities']);
      },
      error => {
        console.error('Error adding activity', error);
      }
    );*/
  }
}
