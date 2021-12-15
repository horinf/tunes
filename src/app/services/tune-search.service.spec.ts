import { TestBed } from '@angular/core/testing';

import { TuneSearchService } from './tune-search.service';

describe('TuneSearchService', () => {
  let service: TuneSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuneSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
