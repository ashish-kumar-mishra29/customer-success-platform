import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOMsComponent } from './moms.component';

describe('MOMsComponent', () => {
  let component: MOMsComponent;
  let fixture: ComponentFixture<MOMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MOMsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MOMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
