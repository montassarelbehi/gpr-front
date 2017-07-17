/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PanneService } from './panne.service';

describe('PanneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanneService]
    });
  });

  it('should ...', inject([PanneService], (service: PanneService) => {
    expect(service).toBeTruthy();
  }));
});
