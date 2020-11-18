import { TestBed } from '@angular/core/testing';

import { LatestSearchService } from './latest-search.service';

describe('LatestSearchService', () => {
  let service: LatestSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
