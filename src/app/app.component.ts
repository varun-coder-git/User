import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {JSONPlaceHolderService} from './services/jsonplace-holder.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder: FormBuilder) {}
}


