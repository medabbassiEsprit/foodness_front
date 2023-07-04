import { TestBed } from '@angular/core/testing';

import { DonApiService } from './don-api.service';

describe('DonApiService', () => {
  let service: DonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
