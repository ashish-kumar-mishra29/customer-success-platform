import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectScopeComponent } from './project-scope.component';

describe('ProjectScopeComponent', () => {
  let component: ProjectScopeComponent;
  let fixture: ComponentFixture<ProjectScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectScopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
