import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../services/goal/goal.service';


@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit-page.component.html',
  styleUrls: ['./goal-edit-page.component.css']
})
export class GoalEditPageComponent {
  goal: any = {
    activityId: null,
    measureUnit: 'time',
    duration: null,
    frequency: null
  };

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      const goalId = params['id'];
      //this.loadGoal(goalId);
    });
  }

  /*loadGoal(goalId: string): void {
    this.goalService.getGoalById(goalId).subscribe(
      (data) => {
        this.editedGoal = data;
      },
      (error) => {
        console.error('Error fetching goal data', error);
      }
    );
  }*/

 /* onSubmit(): void {
    this.goalService.updateGoal(this.editedGoal).subscribe(
      (response) => {
        console.log('Goal updated successfully', response);
        this.router.navigate(['/goals']);
      },
      (error) => {
        console.error('Error updating goal', error);
      }
    );
  }*/

  cancel(): void {
    this.router.navigate(['/goals']);
  }
}
