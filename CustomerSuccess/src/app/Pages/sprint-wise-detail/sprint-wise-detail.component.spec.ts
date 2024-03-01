import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintWiseDetailComponent } from './sprint-wise-detail.component';

describe('SprintWiseDetailComponent', () => {
  let component: SprintWiseDetailComponent;
  let fixture: ComponentFixture<SprintWiseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintWiseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintWiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
