import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthBenefitsCalcComponent } from './health-benefits-calc/health-benefits-calc.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/estimate-benefits', pathMatch: 'full' },
  { path: 'estimate-benefits', component: HealthBenefitsCalcComponent },
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
