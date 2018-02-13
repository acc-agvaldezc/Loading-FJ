import { TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { JourneysService } from '../services/journeys.service';

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
