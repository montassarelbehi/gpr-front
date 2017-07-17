/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdvancedSearchEnginService } from './advanced-search-engin.service';

describe('AdvancedSearchEnginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvancedSearchEnginService]
    });
  });

  it('should ...', inject([AdvancedSearchEnginService], (service: AdvancedSearchEnginService) => {
    expect(service).toBeTruthy();
  }));
});
