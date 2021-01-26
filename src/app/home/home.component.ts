import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Usr } from '../models/usr.model';
import { AuthenticationService } from '../service/authentication.service';
import { UsrService } from '../service/usr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Usr;
  currentUserSubscription:Subscription;
  users: Usr[] = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UsrService
  ) {
    //  this.currentUserSubscription = this.authenticationService.currentUser.subscribe(usr => {
        //  this.currentUser = usr;
     // });
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => {
          this.loadAllUsers()
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }
}
