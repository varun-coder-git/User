import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
 returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    //   if (this.authenticationService.currentUserValue) { 
    //    this.router.navigate(['/']);
    //  }
  }
  ngOnInit() {
   this.createForm();

    // get return url from route parameters or default to '/'
  //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onLogin(loginForm:NgForm){

    console.log(loginForm.value);

    const token=this.authenticationService.authUser(loginForm.value);

    if(token)
    {
      localStorage.setItem(token,token.username);
      alert("Login Successful!!");
    }else
    {
      alert("Login Unsuccessful!!");
    }
  }
 
}
  // convenience getter for easy access to form fields
 // get f() { return this.loginForm.controls; }

 /* onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }*/


