import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    MaterialModule
  ],
  declarations: [UserDetailComponent]
})
export class UserDetailModule { }
