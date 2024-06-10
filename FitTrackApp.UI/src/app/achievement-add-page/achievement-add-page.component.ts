import { Component, OnInit } from '@angular/core';
import { Achievement } from '../models/achievement';
import { Goal } from '../models/goal';
import { AchievementService } from '../services/achievement/achievement.service';
import { GoalService } from '../services/goal/goal.service';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievement-add-page',
  templateUrl: './achievement-add-page.component.html',
  styleUrls: ['./achievement-add-page.component.css']
})
export class AchievementAddPageComponent implements OnInit {
  achievement: Achievement = {
    id: 0,
    goalId: 0,
    date: new Date() ,
    achievedTime: 0,
    achievedFrequency: 0,
    achieved: false
  };
  goals: Goal[] = [];
  selectedGoal: Goal | undefined;
  activities: Activity[] = [];
  activitySearchRequest = { name: '', description: '', activityTypeId: '', startDate: '' };
  activityGoalMap: Map<string, string> = new Map();
  successMessage: string = '';
  errorMessage: string = ''; 

  constructor(
    private achievementService: AchievementService,
    private goalService: GoalService, 
    private activityService: ActivityService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadGoals();
    this.loadActivities();
  }

  loadGoals() {
    this.goalService.getGoals().subscribe((data: Goal[]) => {
      this.goals = data;
    });
  }

  onGoalChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const goalId = +selectElement.value;
    this.selectedGoal = this.goals.find(goal => goal.id === goalId);
  }

  onSubmit(): void {
    if (this.selectedGoal?.duration) {
      this.achievement.achievedFrequency = undefined;
    } else if (this.selectedGoal?.frequency) {
      this.achievement.achievedTime = undefined;
    }
    this.achievementService.addAchievement(this.achievement).subscribe(
      response => {
       this.successMessage = 'Achievement added successfully!';
       this.errorMessage = '';
       setTimeout(() => {
         this.router.navigate(['/achievements']);
       }, 2000);
     },
     error => {
       this.errorMessage = 'Fill required fields and try again.';
       this.successMessage = ''; 
     }
   );
  }

  getActivityName(activityId: number): string {
    const activity = this.activities.find(act => act.id === activityId);
    return activity ? activity.name : 'Unknown Activity';
  }

  loadActivities() {
    this.activityService.getActivities(this.activitySearchRequest).subscribe((data: Activity[]) => {
      this.activities = data;
    });
  }

  cancel(): void {
    this.router.navigate(['/achievements']);
  }
}
