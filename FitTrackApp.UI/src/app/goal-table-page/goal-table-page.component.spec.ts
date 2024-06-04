import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTablePageComponent } from './goal-table-page.component';

describe('GoalTablePageComponent', () => {
  let component: GoalTablePageComponent;
  let fixture: ComponentFixture<GoalTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
