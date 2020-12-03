import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceHolderService {

  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({

  $key: new FormControl(null),
  id: new FormControl('',Validators.required),
  name: new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required,Validators.email]),
  gender: new FormControl('1'),
  status: new FormControl('1'),
  created_at: new FormControl(''),
  updated_at: new FormControl(''),
  });

  
  getData():Observable<any>{

  const url="https://gorest.co.in/public-api/users";  
   return this.http.get<any>(url);
  }
}
