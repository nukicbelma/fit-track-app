import { Component, OnInit } from '@angular/core';
import { Achievement } from '../models/achievement';
import { AchievementService } from '../services/achievement/achievement.service';
import { GoalService } from '../services/goal/goal.service';
import { ActivityService } from '../services/activity/activity.service';
import { Goal } from '../models/goal';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-achievement-table-page',
  templateUrl: './achievement-table-page.component.html',
  styleUrls: ['./achievement-table-page.component.css']
})
export class AchievementTablePageComponent implements OnInit {
  achievements: Achievement[] = [];
  goals: Goal[] = [];
  activities: Activity[] = [];
  goalActivityMap: Map<number, string> = new Map();
  activitySearchRequest = { name: '', description: '', activityTypeId: '', startDate: '' };

  constructor(
    private achievementService: AchievementService,
    private goalService: GoalService,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.loadAchievements();
    this.loadGoals();
    this.loadActivities();
  }

  loadAchievements(): void {
    this.achievementService.getAchievements().subscribe(
      (data: Achievement[]) => {
        this.achievements = data;
      },
      error => {
        console.error('Error fetching achievements', error);
      }
    );
  }

  loadGoals(): void {
    this.goalService.getGoals().subscribe(
      (data: Goal[]) => {
        this.goals = data;
        this.createGoalActivityMap();
      },
      error => {
        console.error('Error fetching goals', error);
      }
    );
  }

  loadActivities(): void {
    this.activityService.getActivities(this.activitySearchRequest).subscribe(
      (data: Activity[]) => {
        this.activities = data;
        this.createGoalActivityMap();
      },
      error => {
        console.error('Error fetching activities', error);
      }
    );
  }

  createGoalActivityMap(): void {
    if (this.goals.length && this.activities.length) {
      const activityMap = new Map(this.activities.map(activity => [activity.id, activity.name]));
      this.goals.forEach(goal => {
        const activityName = activityMap.get(goal.activityId) || 'Unknown';
        this.goalActivityMap.set(goal.id, activityName);
      });
    }
  }

  getActivityName(goalId: number): string {
    return this.goalActivityMap.get(goalId) || 'Unknown';
  }
}
