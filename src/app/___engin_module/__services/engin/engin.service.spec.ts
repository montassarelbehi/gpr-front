import { TestBed, inject } from '@angular/core/testing';

import { EnginService } from './engin.service';

describe('EnginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnginService]
    });
  });

  it('should ...', inject([EnginService], (service: EnginService) => {
    expect(service).toBeTruthy();
  }));
});
