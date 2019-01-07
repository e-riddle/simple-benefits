import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthBenefitsCalcComponent } from './health-benefits-calc/health-benefits-calc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'estimate-benefits', component: HealthBenefitsCalcComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
