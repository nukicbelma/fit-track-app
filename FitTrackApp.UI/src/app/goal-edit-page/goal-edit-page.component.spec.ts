import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalEditPageComponent } from './goal-edit-page.component';

describe('GoalEditPageComponent', () => {
  let component: GoalEditPageComponent;
  let fixture: ComponentFixture<GoalEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
