import { TestBed } from '@angular/core/testing';

import { HealthBenefitsCalcService } from './health-benefits-calc.service';

describe('HealthBenefitsCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthBenefitsCalcService = TestBed.get(HealthBenefitsCalcService);
    expect(service).toBeTruthy();
  });
});
