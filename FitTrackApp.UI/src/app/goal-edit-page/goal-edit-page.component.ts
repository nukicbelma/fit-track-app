import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../services/goal/goal.service';
import { Activity } from '../models/activity';
import { NgForm } from '@angular/forms';
import { ActivityService } from '../services/activity/activity.service';


@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit-page.component.html',
  styleUrls: ['./goal-edit-page.component.css']
})
export class GoalEditPageComponent {
  goal: any = {};
  goalId: number | undefined;
  activities: Activity[] = [];
  activitySearchRequest = { name: '', description: '', activityTypeId: '', startDate: '' };
  successMessage: string = '';
  errorMessage: string = ''; 

  constructor(
    private goalService: GoalService,
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  
    this.loadActivities();
    this.loadGoalbyId();
  }

  loadGoalbyId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id!=null) {
    this.goalId = +id;
    this.goalService.getGoalById(this.goalId).subscribe((data) => {
      this.goal = data;
    });
    }
  } 
  
  loadActivities(): void {
    this.activityService.getActivities(this.activitySearchRequest).subscribe(data => {
      this.activities = data;
    });
  } 

  cancel(): void {
    this.router.navigate(['/goals']);
  }
  
  updateGoal(form: NgForm): void {
    if (form.valid && this.goalId!=null) {
     this.goalService.updateGoal(this.goalId, this.goal).subscribe(
      () => {
        this.successMessage = 'Goal updated successfully!';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/goals']);
        }, 1000);
      },
      (error: any) => {
        this.errorMessage = 'Failed to update goal. Try again.';
        this.successMessage = '';
        console.error('Error updating goal:', error);
        
      }
    );
    }
    else {
      this.errorMessage = 'Failed to update goal. Try again.';
      this.successMessage = '';
    }
  }
}
