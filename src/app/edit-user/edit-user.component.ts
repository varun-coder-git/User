import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'id': [null, Validators.required ],
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
     
    });
  }

  onSubmit(formGroup:NgForm) {
    let user:User={
      id:formGroup.value.id,
      name:formGroup.value.name,
      email:formGroup.value.email,
    }

    this.userService.onAdd(user);
   this.router.navigateByUrl('');
  }
}
