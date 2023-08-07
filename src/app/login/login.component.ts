import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   email:string = '';
  password:string = '';
  loginError: boolean = false;

 constructor( private router: Router ,private sharedService: SharedService ) {}

  registeredEmail = this.sharedService.getRegisteredEmail();

  onSubmit() {

    if (this.registeredEmail && this.registeredEmail === this.email) {
      // Perform authentication logic here, e.g., check password, redirect, etc.
      console.log('Login successful');
      alert("Login successful");
      this.loginError = false;
      this.router.navigateByUrl('dashboard');
    } else {
      // Handle login error
      console.log('Login failed. Email not registered or does not match.');
      this.loginError = true;
      alert("Login failed. Email not registered or does not match.");
      this.router.navigateByUrl('sign-up');
    }
  }
}