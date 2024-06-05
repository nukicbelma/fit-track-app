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
    if (form.valid && this.activityId!=null) {
      this.activityService.updateActivity(this.activityId, this.activity).subscribe(() => {
        this.router.navigate(['/activities']); 
      });
    }
  }

  
  cancel(): void {
    this.router.navigate(['/activities']);
  }
}
