export class BenefitsCalcParameters {
    annualSalary: number;
    firstName: string;
    lastName: string;
    dependents: Dependent[]; 
}
export class Dependent {
    public firstName: string; 
    public lastName: string;
}
