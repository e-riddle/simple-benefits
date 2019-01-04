import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBenefitsCalcComponent } from './health-benefits-calc.component';

describe('HealthBenefitsCalcComponent', () => {
  let component: HealthBenefitsCalcComponent;
  let fixture: ComponentFixture<HealthBenefitsCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthBenefitsCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthBenefitsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
