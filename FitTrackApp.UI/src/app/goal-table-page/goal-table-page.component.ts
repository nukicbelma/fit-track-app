import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal';
import { GoalService } from '../services/goal/goal.service';
import { ActivityService } from '../services/activity/activity.service';
import { Router } from '@angular/router';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-goal-table-page',
  templateUrl: './goal-table-page.component.html',
  styleUrls: ['./goal-table-page.component.css']
})
export class GoalTablePageComponent implements OnInit {
  goals: Goal[] = [];
  activityMap: Map<number, string> = new Map();
  activitySearchRequest = { name: '', description: '' , activityTypeId: '', startDate: ''};
  

  constructor(
    private goalService: GoalService, 
    private activityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGoals();
    this.loadActivities();
  }

  loadGoals(): void {
    this.goalService.getGoals().subscribe((data: Goal[]) => {
      this.goals = data;
    });
  }

  loadActivities(): void {
    this.activityService.getActivities(this.activitySearchRequest).subscribe((data: Activity[]) => {
      this.activityMap = new Map(data.map(activity => [activity.id, activity.name]));
    });
  }

  getActivityName(activityId: number): string {
    return this.activityMap.get(activityId) || 'Unknown';
  }

  addNewGoal(): void {
    this.router.navigate(['/goal-add']);
  }

  editGoal(id: number): void {
    this.router.navigate(['/goal-edit', id]);
  }

  deleteGoal(id: number): void {
    if (confirm('Are you sure you want to delete this goal?')) {
      this.goalService.deleteGoal(id).subscribe(
        () => {
          alert('Goal deleted successfully');
          this.loadGoals();
        },
        error => {
          console.error('Failed to delete goal', error);
          alert('Failed to delete goal');
        }
      );
    }
  }

  viewAchievments(): void {
    this.router.navigate(['/achievments']);
  }
}
