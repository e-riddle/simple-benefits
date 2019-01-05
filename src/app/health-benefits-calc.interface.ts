import { BenefitsCalcParameters } from './benefits-calc-parameters.model';
import { Observable } from 'rxjs';

export interface IHealthBenefitsCalc {
    calcBenefits(parameters: BenefitsCalcParameters): Observable<number>;
}
