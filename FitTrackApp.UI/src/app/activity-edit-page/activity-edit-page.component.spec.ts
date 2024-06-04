import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEditPageComponent } from './activity-edit-page.component';

describe('ActivityEditPageComponent', () => {
  let component: ActivityEditPageComponent;
  let fixture: ComponentFixture<ActivityEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
