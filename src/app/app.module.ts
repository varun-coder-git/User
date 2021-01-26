import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import { JSONPlaceHolderService } from './services/jsonplace-holder.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserListComponent,
    EditUserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [JSONPlaceHolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
