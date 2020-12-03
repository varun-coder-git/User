import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {JSONPlaceHolderService} from './services/jsonplace-holder.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewUserComponent } from './new-user/new-user.component';
import {MatDialog, MatDialogConfig,MatDialogRef} from "@angular/material/dialog";

interface DialogData {
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //constructor(private formBuilder: FormBuilder) {}
  email: string;

  constructor(public dialog: MatDialog) {}

  onCreate() {

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="80%";
  this.dialog.open(NewUserComponent,dialogConfig);

   
  }
}


