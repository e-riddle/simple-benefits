import { Injectable } from '@angular/core';
import { BenefitsCalcParameters } from './benefits-calc-parameters.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthBenefitsCalcService {
  payPeriods = 26;
  employeeBaseCost = 1000;
  dependentBaseCost = 500;
  discountRate = 0.1;

  constructor() { }

  calcBenefits(parameters: BenefitsCalcParameters): Observable<number> {
    let total = 0;

    total += this.calcDependentCost(parameters.firstName, this.employeeBaseCost);

    for (let i = 0; i < parameters.dependents.length; i++){
      total += this.calcDependentCost(parameters.dependents[i].firstName, this.dependentBaseCost);
    }
    return of(total);
  }

  calcDependentCost(firstName: string, baseCost:number) {
    if (firstName.toLowerCase().startsWith('a')) {
      return (1 - this.discountRate) * baseCost;
    } else {
      return baseCost;
    }
  }


}

// export class BenefitsCalcParameters {
//   annualSalary: number;
//   firstName: string;
//   lastName: string;
//   dependents: Dependent[];

// }

// export class Dependent {
//   public firstName: string;  //TODO: Eliminate redundant prop name
//   public lastName: string;

// }
