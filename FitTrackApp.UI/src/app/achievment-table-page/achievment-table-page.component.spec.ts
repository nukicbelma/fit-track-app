import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentTablePageComponent } from './achievment-table-page.component';

describe('AchievmentTablePageComponent', () => {
  let component: AchievmentTablePageComponent;
  let fixture: ComponentFixture<AchievmentTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievmentTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchievmentTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
