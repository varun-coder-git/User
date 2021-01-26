import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Usr } from '../models/usr.model';
import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
import { UsrService } from '../service/usr.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id: number;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user: any = {};
  constructor(private formBuilder: FormBuilder,
    private usrService: UsrService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  onSubmit() {
   
   this.user=Object.assign(this.user,this.registerForm.value);
   this.usrService.registerUser(this.user);
   this.registerForm.reset();
   alert('Registration successful');
   this.router.navigate(['/shoppingcart']);
    }
  



}
   /* this.loading = true;
        this.usrService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }
}
  /* 

   
   
   //this.registerForm.reset();*/



  /* addUser(user){
 
     let users=[];
     
 
   }*/



