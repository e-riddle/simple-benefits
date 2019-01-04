import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-health-benefits-calc',
  templateUrl: './health-benefits-calc.component.html',
  styleUrls: ['./health-benefits-calc.component.css']
})
export class HealthBenefitsCalcComponent {
  payPeriods = 26;
  employeeBaseCost = 1000;
  dependentBaseCost = 500;
  discountRate = 0.1;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    // aliases: this.fb.array([
    //   this.createDependentRow()
    // ])
    dependents: this.fb.array([])
  });
  constructor(private fb: FormBuilder) { }

  addAlias() {
    this.dependents.push(this.createDependentRow());
  }

  createDependentRow(): FormGroup {
    return this.fb.group({
      dependentFirstName: '',
      dependentLastName: ''
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  
  get dependents() {
    return this.profileForm.get('dependents') as FormArray;
  }
}
