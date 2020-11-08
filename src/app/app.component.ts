import { Component } from '@angular/core';
import {JSONPlaceHolderService} from './services/jsonplace-holder.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rslt:Array<any>;
  
constructor(private JSONPlaceHolder:JSONPlaceHolderService){
this.rslt=new Array<any>();
this.getDataFromAPI();
}

getDataFromAPI(){
  this.JSONPlaceHolder.getData().subscribe((data)=>{
    this.rslt=data;
    //console.log(data);
  })
}

displayedColumns: string[] = ['id', 'name'];
}
