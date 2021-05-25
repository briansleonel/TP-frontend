import { TestBed } from '@angular/core/testing';

import { TraductorLogsService } from './traductor-logs.service';

describe('TraductorLogsService', () => {
  let service: TraductorLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraductorLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
