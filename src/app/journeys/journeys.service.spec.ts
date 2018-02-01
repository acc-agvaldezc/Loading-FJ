import { TestBed, inject } from '@angular/core/testing';

import { JourneysService } from './journeys.service';

describe('JourneysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JourneysService]
    });
  });

  it('should be created', inject([JourneysService], (service: JourneysService) => {
    expect(service).toBeTruthy();
  }));
});
