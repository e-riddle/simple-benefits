import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthBenefitsCalcService {
  payPeriods = 26;
  employeeBaseCost = 1000;
  dependentBaseCost = 500;
  discountRate = 0.1;

  constructor() { }

 

}
