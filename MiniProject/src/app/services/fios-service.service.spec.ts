import { TestBed } from '@angular/core/testing';

import { FiosServiceService } from './fios-service.service';

describe('FiosServiceService', () => {
  let service: FiosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
