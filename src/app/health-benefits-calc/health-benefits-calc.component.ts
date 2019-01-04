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
  calculatedValue: string;

  profileForm = this.fb.group({
    annualSalary: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    dependents: this.fb.array([])
  });
  constructor(private fb: FormBuilder, private svc: HealthBenefitsCalcService) { }
  addDependent() {
    this.dependents.push(this.createDependentRow());
  }

  createDependentRow(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: ''
    });
  }

  deleteDependentRow(i: number) {
    this.dependents.removeAt(i)
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    const parameters = new BenefitsCalcParameters();
    parameters.annualSalary = this.profileForm.get('annualSalary').value;
    parameters.firstName = this.profileForm.get('firstName').value;
    parameters.lastName = this.profileForm.get('lastName').value;
    const allDependents: Dependent[] = [];
    const json = this.profileForm.value;

    json.dependents.map(x => {
        allDependents.push(x);
    });

    parameters.dependents = allDependents;

    console.log(parameters);

    let result = this.svc.calcBenefits(parameters);

    console.log(result);

    //Do the calc!!!!

  }

  get dependents() {
    return this.profileForm.get('dependents') as FormArray;
  }
}
