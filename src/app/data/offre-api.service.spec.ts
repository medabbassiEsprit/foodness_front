import { TestBed } from '@angular/core/testing';

import { OffreApiService } from './offre-api.service';

describe('OffreApiService', () => {
  let service: OffreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
