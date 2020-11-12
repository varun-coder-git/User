import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { UserDetail } from 'src/userdetail';
import {JSONPlaceHolderService} from './services/jsonplace-holder.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



}
