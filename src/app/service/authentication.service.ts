import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usr } from '../models/usr.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    authUser(user:any){
        let UserArray=[];
        if(localStorage.getItem('Users')){
            UserArray=JSON.parse(localStorage.getItem('Users'));
        }
            return UserArray.find(p=>p.username===user.username&&p.password===user.password);
    }
 /* private currentUserSubject: BehaviorSubject<Usr>;
    public currentUser: Observable<Usr>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Usr>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usr {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }*/
}
