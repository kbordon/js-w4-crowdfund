import { TestBed, inject } from '@angular/core/testing';

import { VenturesService } from './ventures.service';

describe('VenturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VenturesService]
    });
  });

  it('should be created', inject([VenturesService], (service: VenturesService) => {
    expect(service).toBeTruthy();
  }));
});
