import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterialModule } from '../material/material.module';
import { JSONPlaceHolderService } from '../services/jsonplace-holder.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
  UserRoutingModule, 
  MaterialModule,
  HttpClientModule 
  ],
  declarations: [UserComponent]
  ,
  providers: [JSONPlaceHolderService]
})
export class UserModule { }
