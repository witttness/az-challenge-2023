import { TestBed } from '@angular/core/testing';

import { EateriaCmsService } from './eateria-cms.service';

describe('EateriaCmsService', () => {
  let service: EateriaCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EateriaCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
