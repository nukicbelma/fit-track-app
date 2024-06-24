import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from '../models/goal';
import { ActivityService } from '../services/activity/activity.service';
import { Activity } from '../models/activity';
import { GoalService } from '../services/goal/goal.service';

@Component({
  selector: 'app-goal-add-page',
  templateUrl: './goal-add-page.component.html',
  styleUrls: ['./goal-add-page.component.css']
})
export class GoalAddPageComponent {
  newGoal: Goal = {
    durationUnit: '',
    createdDate: undefined,
    updatedDate: undefined,
    duration: 0, 
    id:0,
    frequency: 0, 
    activityId: 0
  };
  activities: Activity[] = [];
  activitySearchRequest = { name: '', description: '', activityTypeId: '', startDate: '' };
  successMessage: string = '';
  errorMessage: string = ''; 

  constructor(private activityService: ActivityService, private goalService: GoalService, private router: Router) { }

  ngOnInit(): void {
    this.loadActivities();
  }

  cancel(): void {
    this.router.navigate(['/goals']);
  }

  loadActivities(): void {
    this.activityService.getActivities(this.activitySearchRequest).subscribe(data => {
      this.activities = data;
    });
  }

  addGoal(form: any) {
    const newGoal: Goal = {
      id: form.value.id,
      activityId: form.value.activityId,
      durationUnit: form.value.durationUnit,
      duration: form.value.duration, 
      frequency: form.value.frequency
    };

    
    this.goalService.addGoal(newGoal).subscribe(
      response => {
        this.successMessage = 'Goal added successfully';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/goals']);
        }, 2000);
      },
      error => {
        this.errorMessage = 'Failed to add goal.';
        this.successMessage = ''; 
      }
    );
  }
}
