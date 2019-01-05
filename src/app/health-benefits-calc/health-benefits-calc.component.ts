import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HealthBenefitsCalcService } from '../health-benefits-calc.service';
import { BenefitsCalcParameters } from '../health-benefits-calc.service';
import { Dependent } from '../health-benefits-calc.service';


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
  constructor(private fb: FormBuilder, private svc: HealthBenefitsCalcService) { }
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

    const result = this.svc.calcBenefits(parameters);

    this.calculatedValue = result;

    //Do the calc!!!!

  }

  get dependents() {
    return this.profileForm.get('dependents') as FormArray;
  }
}
