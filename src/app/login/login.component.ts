import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient) { }
  BASE_URL: string = 'http://localhost:5000/api';  //TODO: Store this in configuration
  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post(`${this.BASE_URL}/auth/login`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['/dashboard']);
    }, err => {
      this.invalidLogin = true;
    });
  }

}
