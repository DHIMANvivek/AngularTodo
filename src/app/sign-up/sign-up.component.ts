import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private router: Router ,  private sharedService: SharedService) { }
  

  repeatPass: string = 'none';


  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3) ,Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('' , [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('' , [Validators.required, Validators.email]),
    mobile: new FormControl('' ,[ Validators.minLength(10) , Validators.maxLength(10) , Validators.pattern('[0-9]*')]),
    gender: new FormControl(''),
    pwd: new FormControl('' , [Validators.required, Validators.minLength(8) , Validators.maxLength(16) , Validators.pattern('[a-zA-Z0-9]*')]),
    rpwd: new FormControl('')
  });
  registerSubmited() {
    if (this.pwd.value == this.rpwd.value) {
      console.log("Form Submitted");
      // Store the registered email in the shared service
      this.sharedService.setRegisteredEmail(this.email.value);
      this.router.navigateByUrl('login');
    } else {
      this.repeatPass = 'inline';
      alert("Password and Repeat Password are not the same");
    }
  

    console.warn(this.registerForm.get('email')?.value);
  }

  // navigateToLogin() {
  //   this.router.navigateByUrl('login');
  // }

  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }
  get gender(): FormControl {
        return this.registerForm.get('gender') as FormControl;
  }
  get pwd(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
  get rpwd(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }

}
