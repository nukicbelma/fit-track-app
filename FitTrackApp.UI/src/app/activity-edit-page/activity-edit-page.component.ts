import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../services/activity/activity.service';
import { NgForm } from '@angular/forms';
import { ActivityType } from '../models/activityType';

@Component({
  selector: 'app-activity-edit-page',
  templateUrl: './activity-edit-page.component.html',
  styleUrl: './activity-edit-page.component.css'
})
export class ActivityEditPageComponent {
  activityId: number | undefined;
  activity: any = {};
  activityTypes: ActivityType[] = [];
  successMessage: string = '';
  errorMessage: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService 
  ) { }

  ngOnInit(): void {

    this.loadActivityTypes();
    this.loadActivitybyId();
  }

  loadActivitybyId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id!=null) {
    this.activityId = +id;
    this.activityService.getActivityById(this.activityId).subscribe((data) => {
      this.activity = data;
    });
    }
  }  

  loadActivityTypes(): void {
    this.activityService.getActivityTypes().subscribe(data => {
      this.activityTypes = data;
    });
  } 

  updateActivity(form: NgForm): void {
    if (form.valid && this.activityId != null) {
      this.activityService.updateActivity(this.activityId, this.activity).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully!';
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/activities']);
          }, 1000);
        },
        (error: any) => {
          this.errorMessage = 'Failed to update activity. Try again.';
          this.successMessage = '';
          console.error('Error updating activity:', error);
        }
      );
    }
    else {
      this.errorMessage = 'Failed to update activity. Try again.';
      this.successMessage = '';
    }
  }
  
  
  cancel(): void {
    this.router.navigate(['/activities']);
  }
}
