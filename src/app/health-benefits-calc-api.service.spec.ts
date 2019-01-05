import { TestBed } from '@angular/core/testing';

import { HealthBenefitsCalcApiService } from './health-benefits-calc-api.service';

describe('HealthBenefitsCalcApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthBenefitsCalcApiService = TestBed.get(HealthBenefitsCalcApiService);
    expect(service).toBeTruthy();
  });
});
