import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTablePageComponent } from './activity-table-page.component';

describe('ActivityTablePageComponent', () => {
  let component: ActivityTablePageComponent;
  let fixture: ComponentFixture<ActivityTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
