import { Injectable } from '@angular/core';
import { BenefitsCalcParameters } from './benefits-calc-parameters.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IHealthBenefitsCalc } from './health-benefits-calc.interface';
import { environment } from '../environments/environment';

const token = localStorage.getItem('jwt');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
};

@Injectable({
  providedIn: 'root'
})
export class HealthBenefitsCalcApiService implements IHealthBenefitsCalc {
  BASE_URL: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  calcBenefits(parameters: BenefitsCalcParameters): Observable<number> {
    return this.http.post<BenefitsCalcParameters>(`${this.BASE_URL}/BenefitsCalc`, parameters, httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error) => Observable.throw(error))
        );
  }
}
