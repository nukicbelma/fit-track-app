import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementTablePageComponent } from './achievement-table-page.component';

describe('AchievementTablePageComponent', () => {
  let component: AchievementTablePageComponent;
  let fixture: ComponentFixture<AchievementTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchievementTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
