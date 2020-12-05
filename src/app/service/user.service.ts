import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[ {
    "id": 1,
    "name": "joy",
    "email": "joy@gmail.com"
  },
  {
    "id": 2,
    "name": "joy 2",
    "email": "joy2@gmail.com"
  },
  {
    "id": 3,
    "name": "joy 3",
    "email": "joy3@gmail.com"
  },
  {
    "id": 4,
    "name": "joy 4",
    "email": "joy4@gmail.com"
  },
  {
    "id": 5,
    "name": "joy 5",
    "email": "joy5@gmail.com"
  },
  {
    "id": 6,
    "name": "joy 6",
    "email": "joy6@gmail.com"
  }
  ];
  constructor() { }

  onGet()  {
  return this.users;
  }

  onAdd(user:User){
    this.users.push(user);
  }

   onDelete(id:Number){
   let user=this.users.find(x=>x.id===id);
   let index=this.users.indexOf(user,0);
   this.users.splice(index,1);
   }
   
   onEdit(user:User){
    let oldUser=this.users.find(x=>x.id===user.id);
    oldUser.name=user.name;
    oldUser.email=user.email;
    oldUser.id=user.id;


   }
   onGetUser(id:Number){
      return this.users.find(x=>x.id===id);
   }
  
}

 


