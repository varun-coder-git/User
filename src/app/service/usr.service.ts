import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usr } from '../models/usr.model';

@Injectable({
  providedIn: 'root'
})
export class UsrService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Usr[]>(`/users`);
}

registerUser(user){
  let users=[];
  if(localStorage.getItem('Users')){
    users=JSON.parse(localStorage.getItem('Users'));
    users= [user, ...users];
  }
  else{
    users=[user];
  }
  localStorage.setItem('Users',JSON.stringify(users));
  
}
  register(usr:Usr){
    return this.http.post(`/users/register`, usr);
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
}
}
