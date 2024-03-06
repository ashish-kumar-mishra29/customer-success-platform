import { TestBed } from '@angular/core/testing';

import { ProjectStackService } from './project-stack.service';

describe('ProjectStackService', () => {
  let service: ProjectStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
