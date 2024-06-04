import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoalAddPageComponent } from './goal-add-page.component';


describe('GoalAddPageComponent', () => {
  let component: GoalAddPageComponent;
  let fixture: ComponentFixture<GoalAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
