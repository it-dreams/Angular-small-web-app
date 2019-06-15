import { TestBed } from '@angular/core/testing';

import { FatchDataService } from './fatch-data.service';

describe('FatchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FatchDataService = TestBed.get(FatchDataService);
    expect(service).toBeTruthy();
  });
});
