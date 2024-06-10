import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementAddPageComponent } from './achievement-add-page.component';

describe('AchievementAddPageComponent', () => {
  let component: AchievementAddPageComponent;
  let fixture: ComponentFixture<AchievementAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchievementAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
