import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { JSONPlaceHolderService } from './services/jsonplace-holder.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Usr } from './models/usr.model';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //constructor(private formBuilder: FormBuilder) {}
  currentUser: Usr;

  constructor(public dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService) {

  }

  onCreate() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(NewUserComponent, dialogConfig);


  }



}


