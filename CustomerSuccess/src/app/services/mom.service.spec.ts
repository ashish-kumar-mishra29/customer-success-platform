import { TestBed } from '@angular/core/testing';

import { MomService } from './mom.service';

describe('MomService', () => {
  let service: MomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
