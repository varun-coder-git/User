import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';

import {JSONPlaceHolderService} from '../services/jsonplace-holder.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  rslt:Array<any>;
  dataSource: [];
 
displayedColumns: string[] = ['id', 'name', 'email'];
  @ViewChild (MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
constructor(private JSONPlaceHolder:JSONPlaceHolderService){
this.rslt=new Array<any>();
this.getDataFromAPI();
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

getDataFromAPI(){
  this.JSONPlaceHolder.getData().subscribe((data)=>{
  	this.dataSource = data.data;
    this.rslt=data;
    //console.log(data);
  })
}

}