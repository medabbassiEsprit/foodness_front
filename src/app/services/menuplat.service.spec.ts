import { TestBed } from '@angular/core/testing';

import { MenuplatService } from './menuplat.service';

describe('MenuplatService', () => {
  let service: MenuplatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuplatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
