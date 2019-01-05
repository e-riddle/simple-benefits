import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HealthBenefitsCalcService } from '../health-benefits-calc.service';
import { BenefitsCalcParameters, Dependent } from '../benefits-calc-parameters.model';
import { HealthBenefitsCalcApiService } from '../health-benefits-calc-api.service';


@Component({
  selector: 'app-health-benefits-calc',
  templateUrl: './health-benefits-calc.component.html',
  styleUrls: ['./health-benefits-calc.component.css']
})
export class HealthBenefitsCalcComponent {
  calculatedValue = 0;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dependents: this.fb.array([])
  });
  constructor(private fb: FormBuilder, private svc: HealthBenefitsCalcApiService) { }
  addDependent() {
    this.calculatedValue = 0;
    this.dependents.push(this.createDependentRow());
    return;
  }

  createDependentRow(): FormGroup {
    return this.fb.group({
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required]
    });
  }

  deleteDependentRow(i: number) {
    this.calculatedValue = 0;
    this.dependents.removeAt(i);
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.profileForm.status === 'INVALID'){
      this.calculatedValue = 0;
      return;
    }

    const parameters = new BenefitsCalcParameters();
    parameters.firstName = this.profileForm.get('firstName').value;
    parameters.lastName = this.profileForm.get('lastName').value;
    const allDependents: Dependent[] = [];
    const json = this.profileForm.value;

    json.dependents.map(x => {
        allDependents.push(x);
    });

    parameters.dependents = allDependents;

    this.svc.calcBenefits(parameters)
              .subscribe(result => {
                this.calculatedValue = result;
              });

    /*
    NOTE: Use this call if injected HealthBenefitsCalcService (Non api version)
    this.calculatedValue = this.svc.calcBenefits(parameters);
    */

  }

  get dependents() {
    return this.profileForm.get('dependents') as FormArray;
  }
}
