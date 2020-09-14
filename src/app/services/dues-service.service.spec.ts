import { TestBed } from '@angular/core/testing';

import { DuesServiceService } from './dues-service.service';

describe('DuesServiceService', () => {
  let service: DuesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
