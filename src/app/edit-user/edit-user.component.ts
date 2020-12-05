import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  header:string;
  formGroup: FormGroup;

  user: User = {
    id: 0,
    name: '',
    email: ''
  };
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id===0?'Add User':'Edit User';

    if(this.id!=0){

      this.user=this.userService.onGetUser(this.id);
    }
  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'id': [null, Validators.required],
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],

    });
  }

  onSubmit(formGroup: NgForm) {
    let user: User = {
      id: formGroup.value.id,
      name: formGroup.value.name,
      email: formGroup.value.email,
    }
    if(this.id===0){
    this.userService.onAdd(user);
    }
    else{
      this.userService.onEdit(user);
    }
    this.router.navigateByUrl('');
  }
}
