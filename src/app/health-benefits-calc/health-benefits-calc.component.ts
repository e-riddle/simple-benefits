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

  profileForm = this.fb.group({
    annualSalary: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    dependents: this.fb.array([])
  });
  constructor(private fb: FormBuilder) { }
  addDependent() {
    this.dependents.push(this.createDependentRow());
  }

  createDependentRow(): FormGroup {
    return this.fb.group({
      dependentFirstName: '',
      dependentLastName: ''
    });
  }

  deleteDependentRow(i: number) {
    this.dependents.removeAt(i)
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get dependents() {
    return this.profileForm.get('dependents') as FormArray;
  }
}
