import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=this.userService.onGet();
  }

   onDelete(id:Number){
   this.userService.onDelete(id);
  }
}
 