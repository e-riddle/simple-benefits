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

  calcBenefits(parameters: BenefitsCalcParameters): number {
    let total = 0;

    total += this.calcDependentCost(parameters.firstName, this.employeeBaseCost);

    for (let i = 0; i < parameters.dependents.length; i++){
      total += this.calcDependentCost(parameters.dependents[i].firstName, this.dependentBaseCost);
    }

    return total;
  }

  calcDependentCost(firstName: string, baseCost:number) {
    if (firstName.toLowerCase().startsWith('a')) {
      return (1 - this.discountRate) * baseCost;
    } else {
      return baseCost;
    }
  }


}

export class BenefitsCalcParameters {
  annualSalary: number;
  firstName: string;
  lastName: string;
  dependents: Dependent[];

}

export class Dependent {
  // constructor(firstName: string, lastName: string){
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }

  public firstName: string;
  public lastName: string;


  // note you could of just used the constructor,
  // but its a personal preference to have a serialize and deserialize for data coming from the server in a json object type.
  deserialize(data: any){
    this.lastName = data.dependentLastName;
    this.firstName = data.dependentFirstName;
  }

}
