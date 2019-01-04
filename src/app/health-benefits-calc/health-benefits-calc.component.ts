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
  payPeriods: number = 26;
  employeeBaseCost: number = 1000;
  dependentBaseCost: number = 500;
  discountRate: number = 0.1;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    aliases: this.fb.array([
        this.createDependentRow()
    ])
  });
  constructor(private fb: FormBuilder) { }

  addAlias() {
    this.aliases.push(this.createDependentRow());
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
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
}
